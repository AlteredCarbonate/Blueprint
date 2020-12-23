import { Node } from '@baklavajs/core';
import { $engine } from '../../globals';
import { INodeState } from '@baklavajs/core/dist/baklavajs-core/types';

export default class CustomNodeWithClass extends Node {
   type = 'CustomNodeWithClass';
   name = this.type;

   constructor() {
      super();
      this.addInputInterface('Input', 'CheckboxOption', false, {
         type: 'boolean',
      });
      this.addOutputInterface('Output', { type: 'boolean' });
      this.addInputInterface('Test', 'NumberOption', 5, { type: 'number' });

      this.addOption('test', 'InputOption');
      this.addOption('Select', 'SelectOption', 'Test1', undefined, {
         items: ['Test1', 'Test2', 'Test3'],
      });
      this.addOption('This is a checkbox', 'CheckboxOption', true);
      this.addOption('Number', 'NumberOption', 5, undefined, {
         min: 0,
         max: 10,
      });
      this.addOption('Slider', 'SliderOption', 0.5, undefined, {
         min: 0,
         max: 1,
      });
   }

   load(state: INodeState) {
      super.load(state);
   }

   calculate() {
      this.getInterface('Output').value = this.getInterface('Input').value;
   }
}

setTimeout(() => {
   console.log($engine.calculate());
   // this.$engine.hooks.gatherCalculationData.tap('CustomNodeWithClass', () => {
   //    console.log('test hook');
   //    // return the data you want to pass to all nodes
   //    // you can return whatever you want and all nodes will receive this value as a parameter in their calculate function
   //    return { foo: 'bar' };
   // });
   //
   // this.$engine.events.calculated.addListener('CustomNodeWithClass', (r) => {
   //    // r is a Map<Node, any> with the key being a node instance and the value being what the node's calculate function returned
   //    for (const v of r.values()) {
   //       console.log(v);
   //    }
   // });
   console.log('Setting Timeout');
}, 4000);
