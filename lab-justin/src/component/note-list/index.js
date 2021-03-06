import React from 'react';

import NoteItem from '../note-item';

class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='note-list'>
        <h3>Notes</h3>
        <ul>
          {this.props.notes.map((item, i) =>
            
            <li key={i}>
              
              <NoteItem
                notes={this.props.notes}
                item={item}
                noteUpdate={this.props.noteUpdate}
                noteRemove={this.props.noteRemove}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default NoteList;