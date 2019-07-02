let selectedResources = [];

const highlight = (nodeIds) => {
    for (let nodeId in allNodes) {
        if (nodeIds.includes(nodeId) || nodeIds.length === 0) { allNodes[nodeId].color = undefined; }
        else { allNodes[nodeId].color = 'rgba(200,200,200,0.5)'; }
    };
};

const getDoables = (selectedResources) => {
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

    const getLeafs = (nodeIds) => {
        return nodeIds
            .reduce(
                (acc, cur) => {
                    const directDesc = getDirectDesc(cur);
                    if (directDesc.length === 0) { return [...acc, cur]; }
                    else { return [...acc, ...getLeafs(directDesc)]; }
                },
                []
            );
    };

    const impliedAvailableResources = [... new Set(getLeafs(selectedResources))];

    const getDirectDoables = (nodeId, impliedDoables) => {
        console.log({ nodeId });
        const asc = getDirectAsc(nodeId);
        const directDoables = [... new Set(
            asc.filter(r => { // for each ascendent r checks if each d, descendent of r, is in the list of implied doables
                console.log({ r });
                if (impliedDoables.includes(r)) {
                    return true;
                } else {
                    return getDirectDesc(r).every(d => {
                        console.log({ d });
                        return impliedDoables.includes(d);
                    });
                }
            })
        )];

        return directDoables;
    };

    const getDoables = (impliedDoables) => {
        let newImpliedDoables = impliedDoables
            .reduce(
                (acc, cur) => { return [...acc, ...getDirectDoables(cur, impliedDoables)]; },
                impliedDoables
            );

        const oldSet = new Set(impliedDoables);
        const newSet = new Set(newImpliedDoables);

        if (!(newSet.size === oldSet.size && [...newSet].every(r => oldSet.has(r)))) {
            return [... new Set(getDoables([...newSet]))];
        } else {
            return [...newSet];
        }
    };

    return getDoables(impliedAvailableResources);
};

// eslint-disable-next-line require-jsdoc
function selectNode(params) {

    if (params.nodes[0]) { selectedResources = [... new Set([...selectedResources, params.nodes[0]])]; }
    else { selectedResources = []; }

    const impliedDoables = getDoables(selectedResources);

    console.log({ impliedDoables });

    highlight(impliedDoables);

    let updateArray = [];
    for (let nodeId in allNodes) {
        if (allNodes.hasOwnProperty(nodeId)) { updateArray.push(allNodes[nodeId]); }
    }

    nodesDataset.update(updateArray);
}

redrawAll();
