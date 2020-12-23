<template>
   <baklava-editor :plugin="viewPlugin"></baklava-editor>
</template>

<script lang="ts">
   import Vue from 'vue';
   import { Editor } from '@baklavajs/core';
   import { ViewPlugin } from '@baklavajs/plugin-renderer-vue';
   import { InterfaceTypePlugin } from '@baklavajs/plugin-interface-types';
   import { OptionPlugin } from '@baklavajs/plugin-options-vue';

   import { $engine } from './Nodes/globals';
   import { RegisterNodesMath, RegisterNodesEvents } from './Nodes';

   export default Vue.extend({
      name: 'System',
      data() {
         return {
            editor: new Editor(),
            viewPlugin: new ViewPlugin(),
            infTypePlugin: new InterfaceTypePlugin(),
            optionPlugin: new OptionPlugin(),
         };
      },
      created() {
         this.editor.use(this.viewPlugin);
         this.editor.use(this.infTypePlugin);
         this.editor.use(this.optionPlugin);
         this.editor.use($engine);
      },
      mounted() {
         RegisterNodesMath(this.editor);
         RegisterNodesEvents(this.editor);

         setTimeout(() => {
            $engine.hooks.gatherCalculationData.tap(this, (n) => {
               console.log('test hook' + n);
               // $engine.calculate();
               // return the data you want to pass to all nodes
               // you can return whatever you want and all nodes will receive this value as a parameter in their calculate function
               return { foo: 'bar' };
            });

            $engine.events.calculated.addListener(this, (r) => {
               // r is a Map<Node, any> with the key being a node instance and the value being what the node's calculate function returned
               for (const v of r.values()) {
                  console.log(v);
               }
            });
            console.log('Setting Timeout');
         }, 4000);
      },
   });
</script>

<style>
   baklava-editor {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      height: 100vh;
      width: 100vw;
   }
</style>
