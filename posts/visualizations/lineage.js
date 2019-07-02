
const highlight = (nodeIds) => {
    for (let nodeId in allNodes) {
        if (nodeIds.includes(nodeId) || nodeIds.length === 0) { allNodes[nodeId].color = undefined; allNodes[nodeId].label = allNodes[nodeId].hiddenLabel || allNodes[nodeId].label; }
        else { allNodes[nodeId].color = 'rgba(200,200,200,0.5)', allNodes[nodeId].hiddenLabel = allNodes[nodeId].label || allNodes[nodeId].hiddenLabel, allNodes[nodeId].label = undefined; }
    };
};

const selectLineage = (params) => {
    const selectedNodeId = params.nodes[0];

    const getDirectDesc = (nodeId) => {
        const desc = edges
            .filter(rec => { return rec.from === nodeId; })
            .map(rec => { return rec.to; });
        return desc;
    };

    const getDirectAsc = (nodeId) => {
        const asc = edges
            .filter(rec => { return rec.to === nodeId; })
            .map(rec => { return rec.from; });
        return asc;
    };


    const getAsc = (nodeIds) => {
        return nodeIds
            .reduce(
                (acc, cur) => { return [...acc, ...getAsc(getDirectAsc(cur))]; },
                nodeIds
            );
    };

    const getDesc = (nodeIds) => {
        return nodeIds
            .reduce(
                (acc, cur) => { return [...acc, ...getDesc(getDirectDesc(cur))]; },
                nodeIds
            );
    };

    if (selectedNodeId) { return [... new Set([...getDesc([selectedNodeId]), ...getAsc([selectedNodeId])])]; }
    else { return []; }

};


// eslint-disable-next-line require-jsdoc
function selectNode(params) {

    const lineage = selectLineage(params);
    highlight(lineage);

    let updateArray = [];
    for (let nodeId in allNodes) {
        if (allNodes.hasOwnProperty(nodeId)) { updateArray.push(allNodes[nodeId]); }
    }

    nodesDataset.update(updateArray);
}

redrawAll();
