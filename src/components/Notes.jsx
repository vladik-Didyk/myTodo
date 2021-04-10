import React from 'react'
import moment from 'moment'
import {TransitionGroup, CSSTransition} from 'react-transition-group'





const Notes = ({notes, onRemove}) =>(
      
    
    <TransitionGroup component="div" className="list-group">
         {notes.map( note => (
             <CSSTransition
             key={note.id}
             classNames={`note`}
             timeout={800}
             >
                    <div className="list-group-item note" > 
                            <div>
                                <strong>{note.title}</strong>
                                <small>{moment().format('MMMM Do YYYY, h:mm:ss a')}</small>
                            </div>
                        <button 
                            className="btn btn-outline-danger btn-sm"
                            type="button" 
                            onClick={()=>onRemove(note.id)}
                        >
                            &times;
                        </button>
                    </div>
        </CSSTransition>
         ))}
    </TransitionGroup>
    )


export default Notes