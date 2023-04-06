import React, { useCallback, useMemo, useState } from "react";
import { MdFlag } from "react-icons/md";
import { NodeHeader } from "./node-header/NodeHeader";
import { Handle, Position, NodeProps, NodeToolbar } from "reactflow";
import { IconButton } from "@/components/icon-button/IconButton";
import S from "./NodeActivity.styles";

const NodeActivity = (props: NodeProps) => {
  const { isHeadNode, isTailNode, event } = props["data"];
  const { id } = props;

  const [isFlagged, setIsFlagged] = useState(false);

  const setNodeHasFlagged = useCallback(() => {
    setIsFlagged((prev) => !prev);
  }, []);

  const renderHelperButtons = useMemo(() => {
    return (
      <IconButton icon={<MdFlag size="13" />} onClick={setNodeHasFlagged} />
    );
  }, []);

  return (
    <S.NodeContainer className="activity-draggable-handle" key={id}>
      <NodeToolbar>{renderHelperButtons}</NodeToolbar>

      <NodeHeader event={event} isFlagged={isFlagged} />
      {!isHeadNode && <Handle position={Position.Left} type="target" />}
      {!isTailNode && <Handle position={Position.Right} type="source" />}
    </S.NodeContainer>
  );
};

export { NodeActivity };
