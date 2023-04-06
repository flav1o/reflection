import dayjs from "dayjs";
import { vwToPx } from "@/common/utils";
import { Measurable } from "measurables";
import DUMMY_DATA from "@/dummy-session.json";
import { ConnectionLineType, Node, Edge, MarkerType } from "reactflow";

interface IGenSession {
  _nodes: Node[];
  _edges: Edge[];
}

const NodeHelper = {
  genSession: function (session?: Measurable[]): IGenSession {
    const dummy: Measurable[] = session || DUMMY_DATA;
    const lastNodeIndex = dummy.length - 1;

    const nodes: Node[] = dummy.map((item, index: number) => {
      return this.genNode(item, index, lastNodeIndex);
    });

    const edges: Edge[] = dummy.map((currNode, index: number) => {
      const nextNode = dummy[index + 1] || currNode;
      const timeBetweenNodes = this.calcTimeBetweenNodes(
        currNode.createdAt,
        nextNode.createdAt
      );

      return this.genEdge(
        currNode.eventId,
        nextNode.eventId,
        timeBetweenNodes.toString()
      );
    });

    return { _nodes: nodes, _edges: edges };
  },
  genNode: (
    { eventId, event }: Measurable,
    index: number,
    lastNodeIndex: number
  ): Node => {
    const newNode: Node = {
      id: eventId,
      draggable: true,
      type: "activity",
      dragHandle: ".activity-draggable-handle",
      position: { x: vwToPx(18) * index, y: 300 },
      data: {
        event,
        isHeadNode: index === 0,
        isTailNode: index === lastNodeIndex,
      },
    };

    return newNode;
  },
  genEdge: (source: string, target: string, label: string): Edge => {
    const newEdge: Edge = {
      id: `e${source}-${target}`,
      source,
      target,
      label,
      type: ConnectionLineType.SmoothStep,
      animated: true,
      pathOptions: {
        borderRadius: 20,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
    };

    return newEdge;
  },
  calcTimeBetweenNodes: (firstNode: Date, secondNode: Date): number => {
    const [_first, _second] = [dayjs(firstNode), dayjs(secondNode)];

    return _second.diff(_first, "minutes");
  },
};

export { NodeHelper };
