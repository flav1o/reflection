import React, { useCallback } from "react";
import { NodeHelper } from "@/helpers/node.helper";
import { BottomSessionBar, NodeActivity } from "@/components/index";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  ConnectionMode,
  addEdge,
  Connection,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";

const NODE_TYPES = {
  activity: NodeActivity,
};

const SessionTracker = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback((connection: Connection) => {
    return setEdges((edges) => addEdge(connection, edges));
  }, []);

  const onFlowInit = useCallback(() => {
    const { _nodes, _edges } = NodeHelper.genSession();

    setNodes(_nodes);
    setEdges(_edges);
  }, []);

  return (
    <>
      <BottomSessionBar
        userIdentifier="flaviodancosta07@gmail.com"
        sessionDurationInMinutes={55}
      />
      <ReactFlow
        nodeTypes={NODE_TYPES}
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        connectionMode={ConnectionMode.Loose}
        proOptions={{ hideAttribution: true }}
        onInit={onFlowInit}
      >
        <Controls />
        <Background color="#aaa" gap={16} />
        <MiniMap style={{ height: 50 }} zoomable pannable />
      </ReactFlow>
    </>
  );
};

export { SessionTracker };
