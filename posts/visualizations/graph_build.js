/* global vis */

let allNodes;

// loading data
const nodes = zooData.map(n => {
    return {
        id: n.id,
        label: n.name,
        group: n.category,
        level: ((cat) => {
            if (cat === 'functionality') { return 0; }
            else if (cat === 'protocol') { return 1; }
            else if (cat === 'nodal_subroutine') { return 3; }
            else if (cat === 'physical_resource') { return 4; }
            else if (cat === 'missing functionality') { return 0; }
            else if (cat === 'missing protocol') { return 2; }
            return 3;
        })(n.category),
        uri: n.uri
    };
});

const edges = zooData.reduce(
    (edges, node) => {
        if (node.implemented_by) { edges.push(...node.implemented_by.map(r => { return { from: node.id, to: r, arrows: "to", /*label: "IMPLEMENTED_BY"*/ }; })); }
        if (node.requires) { edges.push(...node.requires.map(r => { return { from: node.id, to: r, arrows: "to", /*label: "REQUIRES"*/ }; })); }
        if (node.has_subtype) { edges.push(...node.has_subtype.map(r => { return { from: node.id, to: r, arrows: "to", /*label: "HAS_SUBTYPE"*/ }; })); }
        return edges;
    },
    []
);

const missing_nodes = [... new Set([...edges.map(edge => { return edge.from; }), ...edges.map(edge => { return edge.to; })])].filter(node => { return !(nodes.find(n => { return n.id === node; })); });
// console.log({ missing_nodes });

// create an array with nodes
const nodesDataset = new vis.DataSet(nodes);

// create an array with edges
const edgesDataset = new vis.DataSet(edges);


const options = {
    interaction: { hover: true },
    // manipulation: { enabled: true }
};

function redrawAll() {
    var container = document.getElementById('mynetwork');
    var options = {
        nodes: {
            shape: 'box',
            // shape: 'dot',
            // shape: 'circle',
            widthConstraint: { maximum: 300, minimum: 300 },
            heightConstraint: { minimum: 350 },
            // size: 10,
            // scaling: { min: 10, max: 30, label: { min: 8, max: 30, drawThreshold: 12, maxVisible: 20 } },
            font: { size: 36, face: 'Arial' }
        },
        edges: { width: 3, color: { inherit: 'from' }, smooth: { type: 'continuous' } },

        // physics: { barnesHut: { "gravitationalConstant": -5000, avoidOverlap: 1, springLength: 600 }, minVelocity: 0.75 },
        // "physics": { "hierarchicalRepulsion": { "centralGravity": 0 }, "minVelocity": 0.75, "solver": "hierarchicalRepulsion" },
        // "physics": { "repulsion": { "centralGravity": 0, "springLength": 365, "springConstant": 0.69 }, "minVelocity": 0.75, "solver": "repulsion" },
        // "physics": { "forceAtlas2Based": { "gravitationalConstant": -500, "springLength": 500, "springConstant": 0.2, avoidoverlap: 1, "damping": 0.8, }, "minVelocity": 0.75, "solver": "forceAtlas2Based" },
        physics: { enabled: false },

        layout: { randomSeed: 0, hierarchical: { direction: 'UD', sortMethod: 'directed', "enabled": true, "nodeSpacing": 350, levelSeparation: 400 } },

        interaction: {
            tooltipDelay: 200,
            // hideEdgesOnDrag: true,
            // hideEdgesOnZoom: true
        },

        // configure: { filter: function (option, path) { if (path.indexOf('hierarchical') !== -1) { return true } return false }, showButton: true },
    };

    const data = {
        nodes: nodesDataset,
        edges: edgesDataset
    };

    const network = new vis.Network(container, data, options);

    // get a JSON object
    allNodes = nodesDataset.get({ returnType: 'Object' });

    console.log(options);

    network.on('click', selectNode);
}
