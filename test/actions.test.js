import chai from 'chai';
const assert = chai.assert;
const expect = chai.expect;
import { 
	createNote, 
	selectNote, 
	noSelect, 
	startWriteNote, 
	writeNote,
	copyNotes,
	pasteNotes, 
	removeNotes
} from '../src/actions';
import { 
	CREATE_STICKY_NOTE, 
	SELECT_NOTE, 
	NO_SELECT, 
	EDIT_NOTE, 
	WRITE_NOTE,
	COPY_NOTES,
	PASTE_NOTES,
	REMOVE_NOTES
} from '../src/constants'

describe('Action::Notes', function(){
	describe('#createNote()', function(){
	  	it('returns create action type and payload object with positions and target', function(){
	  		const position = 10;
	    	const action = createNote(position, position, {});
	    	expect(action).to.deep.equal({type: CREATE_STICKY_NOTE, payload: {posX: position, posY: position, target: {}}});
	    });
	});
	describe('#selectNote()', function(){
	  	it('returns select action type and payload object with id and shiftPressed', function(){
	  		const id = 1;
	  		const shiftPressed = true;
	    	const action = selectNote(id, shiftPressed);
	    	expect(action).to.deep.equal({type: SELECT_NOTE, payload: {id: id, shiftPressed: shiftPressed}});
	    });
	});
	describe('#noSelect()', function(){
	  	it('returns no select action type and payload with target', function(){
	  		const target = {};
	    	const action = noSelect(target);
	    	expect(action).to.deep.equal({type: NO_SELECT, payload: {}});
		});
	});
	describe('#startWriteNote()', function(){
	  	it('returns edit note action type and payload with id', function(){
	  		const id = 1;
	    	const action = startWriteNote(id);
	    	expect(action).to.deep.equal({type: EDIT_NOTE, payload: id});
		});
	});
	describe('#writeNote()', function(){
	  	it('returns write note action type and payload object with id and text', function(){
	  		const id = 1;
	  		const text = "hello test!";
	    	const action = writeNote(id, text);
	    	expect(action).to.deep.equal({type: WRITE_NOTE, payload: {id: id, text: text}});
		});
	});
	describe('#copyNotes()', function(){
	  	it('returns copy notes action type', function(){
	    	const action = copyNotes();
	    	expect(action).to.deep.equal({type: COPY_NOTES});
		});
	});
	describe('#pasteNotes()', function(){
	  	it('returns paste notes action type', function(){
	    	const action = pasteNotes();
	    	expect(action).to.deep.equal({type: PASTE_NOTES});
		});
	});
	describe('#removeNotes()', function(){
	  	it('returns remove notes action type', function(){
	    	const action = removeNotes();
	    	expect(action).to.deep.equal({type: REMOVE_NOTES});
		});
	});
});