import { NodeBuilder } from '@baklavajs/core';

export default new NodeBuilder('CustomNodeWithBuilder', {
   twoColumn: true,
   width: 200,
})
   .addInputInterface('Event In')
   .addOutputInterface('Event Out')
   .onCalculate(() => {
      return 'Calculating please wait. cb';
   })

   .build();
