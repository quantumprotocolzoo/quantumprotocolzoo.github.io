/* global vis */

let network;
let allNodes;
let highlightActive = false;

const nodes = [
    { id: "1", label: 'QKD', title: "Quantum Key Distribution", group: "func" },
    { id: "2", label: 'BB84', title: "Brassard Bennett '84", group: "proto" },
    { id: "3", label: 'QC', title: "Quantum Channel", group: "res" },
    { id: "4", label: 'SQM', title: "Single Qubit Measurement", group: "res" },
    { id: "5", label: 'SQSP', title: "Single Qubit State Preparation", group: "res" },
    { id: "6", label: 'RNG', title: "CLassical Random Number Generator", group: "nsub" }
];

const edges = [
    { from: "1", to: "2", arrows: "to" },
    { from: "2", to: "3", arrows: "to" },
    { from: "2", to: "4", arrows: "to" },
    { from: "2", to: "5", arrows: "to" },
    { from: "2", to: "6", arrows: "to" },
];

// create an array with nodes
const nodesDataset = new vis.DataSet(nodes);

// create an array with edges
const edgesDataset = new vis.DataSet(edges);


const options = {
    interaction: { hover: true },
    //manipulation: { enabled: true }
};

function redrawAll() {
    var container = document.getElementById('mynetwork');
    var options = {
        nodes: {
            shape: 'ellipse',//'dot',
            scaling: { min: 10, max: 30, label: { min: 8, max: 30, drawThreshold: 12, maxVisible: 20 } },
            font: { size: 12, face: 'Tahoma' }
        },
        edges: {
            width: 0.15,
            color: { inherit: 'from' },
            smooth: { type: 'continuous' }
        },
        physics: true, // false,
        interaction: {
            tooltipDelay: 200,
            // hideEdgesOnDrag: true,
            // hideEdgesOnZoom: true
        }
    };

    const data = {
        nodes: nodesDataset,
        edges: edgesDataset
    };

    network = new vis.Network(container, data, options);

    // get a JSON object
    allNodes = nodesDataset.get({ returnType: 'Object' });

    network.on('click', highlight);
}

const toggleHighlight = (nodeIds, activeHighlight) => {
    activeHighlight = !activeHighlight;
    console.log({ nodeIds, activeHighlight });
    for (let nodeId in allNodes) {
        if ((nodeIds.includes(nodeId) && activeHighlight) || !activeHighlight) { allNodes[nodeId].color = undefined; }
        else { allNodes[nodeId].color = 'rgba(200,200,200,0.5)'; }
    };
    return activeHighlight;
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
function highlight(params) {

    console.log({ highlightActive, nodeId: params.nodes[0] });

    if (params.nodes[0]) { highlightActive = false; }
    else { highlightActive = true; }

    if (highlightActive) { highlightActive = toggleHighlight([], highlightActive); }
    else {
        const lineage = selectLineage(params);
        highlightActive = toggleHighlight(lineage, highlightActive);
    };

    let updateArray = [];
    for (let nodeId in allNodes) {
        if (allNodes.hasOwnProperty(nodeId)) { updateArray.push(allNodes[nodeId]); }
    }

    nodesDataset.update(updateArray);
}

redrawAll();
