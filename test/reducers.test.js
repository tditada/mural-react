import chai from 'chai';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const assert = chai.assert;
const expect = chai.expect;
import { changeNotes, initialState } from '../src/reducers';
import { CREATE_STICKY_NOTE, SELECT_NOTE, NO_SELECT, EDIT_NOTE, WRITE_NOTE, COPY_NOTES, PASTE_NOTES, REMOVE_NOTES } from '../src/constants'

describe('Reducer::changeNotes', function(){
	const document = (new JSDOM(`<!DOCTYPE html>`)).window.document;

	describe('#Action:undefined', function(){
		it('returns an initialState as default state', function(){
			let action = { type: 'unknown' };
			let newState = changeNotes(undefined, action);
			expect(newState).to.deep.equal(initialState);
		});
	})

	describe('#Action:CREATE_STICKY_NOTE', function(){
		it('returns a new note', function(){
			let action = { type:  CREATE_STICKY_NOTE, payload: {target: null, posX: 10, posY: 10}};
			let newState = changeNotes(initialState, action);
			expect(newState.notes.length).to.deep.equal(initialState.notes.length + 1);
		});

		it('returns totalNotesCreated plus 1', function(){
			let action = { type:  CREATE_STICKY_NOTE, payload: {target: null, posX: 10, posY: 10}};
			let newState = changeNotes(initialState, action);
			expect(newState.totalNotesCreated).to.deep.equal(initialState.totalNotesCreated + 1);
		});
	});

	describe('#Action:SELECT_NOTE', function(){
		it('returns the selected note with active true', function(){
			const id = 1;
			let action = { type:  SELECT_NOTE, payload: {id: id}};
			let newState = changeNotes(initialState, action);
			newState.notes.forEach( (item, index) => {
		        if (index === (id - 1)) {
		            expect(item.active).equal(true);
		        } else {
		        	expect(item.active).equal(false);
		        }
		    });
		});
	});

	describe('#Action:NO_SELECT', function(){
		it('returns newState with no selected notes', function(){
			let action = { type: NO_SELECT, payload: null};
			let newState = changeNotes(initialState, action);
			newState.notes.forEach( (item, index) => {
		    	expect(item.active).equal(false);
		    });
		});
	});

	describe('#Action:EDIT_NOTE', function(){
		it('returns note with canWrite true', function(){
			const id = 1;
			let action = { type: EDIT_NOTE, payload: id};
			let newState = changeNotes(initialState, action);
			newState.notes.forEach( (item, index) => {
				if (index === (id - 1)) {
		    		expect(item.canWrite).equal(true);
		    	} else {
		    		expect(item.canWrite).equal(false);
		    	}
		    });
		});
	});

	describe('#Action:WRITE_NOTE', function(){
		it('returns new state with edited note', function(){
			const id = 1;
			const text = 'hello test!';
			let action = { type: WRITE_NOTE, payload: {id: id, text: text}};
			let newState = changeNotes(initialState, action);
			newState.notes.forEach( (item, index) => {
				if (index === (id - 1)) {
		    		expect(item.text).equal(text);
		    	}
		    });
		});
	});

	describe('#Action:COPY_NOTES', function(){
		it('returns new state with copied notes', function(){
			const id = 1;
			initialState.notes[id].active = true;
			let action = { type: COPY_NOTES };
			let newState = changeNotes(initialState, action);
			expect(newState.copied.length).equal(initialState.copied.length + 1);
		});
	});

	describe('#Action:PASTE_NOTES', function(){
		it('returns new state with pasted notes', function(){
			const id = 1;
			initialState.copied = [ initialState.notes[id] ];
			let action = { type: PASTE_NOTES };
			let newState = changeNotes(initialState, action);
			expect(newState.copied.length).equal(0);
			expect(newState.notes.length).equal(initialState.notes.length + 1);
		});
	});

	describe('#Action:REMOVE_NOTES', function(){
		it('returns new state with removed note', function(){
			const id = 1;
			initialState.notes[id].active = true;
			let action = { type: REMOVE_NOTES };
			let newState = changeNotes(initialState, action);
			newState.notes.forEach( (item, index) => {
				if (index === id) {
		    		expect(item.removed).equal(true);
		    	} else {
		    		expect(item.removed).equal(false);
		    	}
		    });
		});
	});

});