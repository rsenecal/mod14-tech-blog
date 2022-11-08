const sequelize = require("../config/connection.js");
const { User, Blog } = require("../models");

const userSeedData = require("./userSeedData.json");
const blogSeedData = require("./blogSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  const blogs = await Blog.bulkCreate(blogSeedData, {
    // individualHooks: true,
    returning: true,
  });

  //   for (const { id } of readers) {
  //     const newCard = await LibraryCard.create({
  //       reader_id: id,
  //     });
  //   }

  //   for (const book of bookSeedData) {
  //     const newBook = await Book.create({
  //       ...book,
  //       // Attach a random reader ID to each book
  //       reader_id: readers[Math.floor(Math.random() * readers.length)].id,
  //     });
  //   }

  process.exit(0);
};

seedDatabase();
