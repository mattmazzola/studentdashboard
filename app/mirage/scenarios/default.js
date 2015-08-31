export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  // server.createList('contact', 10);
  server.createList('event', 10);
  const categories = server.createList('category', 4);

  categories.forEach(category => {
    const items = server.createList('item', 5, { category_id: category.id });
    items.forEach(item => {
      server.createList('activity', 3, { item_id: item.id });
    });
  });


}
