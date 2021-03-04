import React from 'react'
import Details from './Details';
import '../App.css'
import {DragDropContainer,DropTarget  } from 'react-drag-drop-container'
const DragDrop = () => {
    const array=[123455,543221,122345,123445,122345,123455,543221,122345,123445,122345];
    var drag=false;
    return (
        <div>
            <div className="Container1">
                <div className="first_div forEach">
                    <div>
                        <h4>PO Number</h4>
                    </div>
                    <div>
                        <ul style={{listStyleType:'none'}}>
                            {array.map((number)=><li>
                                <DragDropContainer 
                                targetKey="drag_item"
                                dragData={number}
                                // onDragStart={}
                                // onDrop={array.splice(array.indexOf(number),1)}
                                >#{number}</DragDropContainer></li>)}
                        </ul>
                        <DragDropContainer >
                            <span>Example</span>
                        </DragDropContainer>
                    </div>
                </div>
                <div className="second_div forEach">
                    <div>
                        <h4>Configuration</h4>
                        <div>
                            <DropTarget
                             targetKey="drop_item"
                            //  onDragEnter={drag=true}
                             >
                            <div className="each_Container">
                                <p>{drag==true?"Drag worked!":""}</p>
                            </div>
                            </DropTarget>
                            <DropTarget targetKey="drop_item">
                            <div className="each_Container">
                            </div>
                            </DropTarget>
                            <DropTarget targetKey="drop_item">
                            <div className="each_Container">

                            </div>
                            </DropTarget>
                        </div>
                        <div className="add_preview in_Configuration"
                            style={{position:"absolute",bottom:"58px",right:"350px"}}>
                            <button type="button" className="btn #1e88e5 blue darken-1">
                                <i class="material-icons"> add </i>
                                &nbsp; Add new Trailer</button>&nbsp;&nbsp;
                            <button type="button" className="btn #1e88e5 blue darken-1">Full preview</button>
                        </div>
                    </div>
                </div>
                <div className="third_div forEach">
                    <div>
                        <Details/>
                    </div>
                </div>
            </div>
                <div className="bottom_button"
                 style={{position:"absolute " ,right:"30px"}}>
                <button type="button" className="btn #1e88e5 blue darken-1">
                    &nbsp; cancel</button>&nbsp;&nbsp;
                    <button type="button" className="btn #1e88e5 blue darken-1">
                        Proceed
                    </button>
                </div>
        </div>
        
    )
}

export default DragDrop
