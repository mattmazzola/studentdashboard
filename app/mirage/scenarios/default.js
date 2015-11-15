export default function(server) {
  server.loadFixtures();
  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('contact', 10);
  server.createList('event', 10);

  // const categories = server.createList('category', 2);
  // categories.forEach(category => {
  //   let items;
  //
  //   if(category.title === 'Incomplete Assignments') {
  //     items = server.createList('item', 10, {
  //       category_id: category.id,
  //       description: 'Incomplete Assignments Description'
  //     });
  //   }
  //   else if(category.title === 'Upcoming Tests') {
  //     items = server.createList('item', 10, {
  //       category_id: category.id,
  //       description: 'Test Description'
  //     });
  //   }
  //
  //   items = server.createList('item', 10, {
  //     category_id: category.id,
  //     description: 'Generic Description'
  //   });
  //
  //   items.forEach(item => {
  //     server.createList('activity', 3, { item_id: item.id });
  //   });
  // });


}
