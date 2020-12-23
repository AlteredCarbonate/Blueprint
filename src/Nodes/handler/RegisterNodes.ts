import { Multiplying, MultiplyingV2 } from '../components/math';
import { EventStart } from '../components/events';
import { Editor } from '@baklavajs/core';

export function RegisterNodesMath(editor: Editor) {
   editor.registerNodeType('Multiplying', Multiplying);
   editor.registerNodeType('MultiplyingV2', MultiplyingV2);
}

export function RegisterNodesEvents(editor: Editor) {
   editor.registerNodeType('Init', EventStart, 'Events');
}
