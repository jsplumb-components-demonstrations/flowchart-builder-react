import React, { useState, useEffect, useRef } from 'react';

import { createRoot } from 'react-dom/client';

import { FlowchartComponent, PaletteComponent, InspectorComponent } from "@jsplumb-components/flowchart-react"

function DemoComponent(props) {

    const flowchart = useRef(null)

    useEffect(() => {
        flowchart.current.loadUrl('./copyright.json', () => {
            flowchart.current.zoomToFit()
        })
    }, [])

    function undo() {
        flowchart.current.undo()
    }

    function redo() {
        flowchart.current.redo()
    }

    return <>
        <div className="container">
            <PaletteComponent flowchartId="myFlowchart"/>
            <FlowchartComponent ref={flowchart} id="myFlowchart"/>
            <div className="rhs">
                <div id="undoredo">
                    <button onClick={() => undo()}>Undo</button>
                    <button onClick={() => redo()}>Redo</button>
                </div>
                <InspectorComponent flowchartId="myFlowchart"/>
            </div>
        </div>
        </>
}

const c = createRoot(document.querySelector("#main"))
c.render(<DemoComponent/>)
