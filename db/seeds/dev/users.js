const usersData = require('../../../usersData');

const createUser = async (knex, user) => {
  user.user_id = 4;
  const userId = await knex('users').insert({
    user_id: user.user_id,
    user_name: user.user_name,
    user_screen_name: user.user_screen_name,
    user_description: user.user_description,
    user_location: user.user_location,
    user_created_at: user.user_created_at
  }, 'id');

  let postPromises = user.user_posts.map(post => {
    post.id = 5;
    return createPost(knex, {
      post_created_at: post.created_at,
      id: post.id,
      retweet_count: post.retweet_count,
      favorite_count: post.favorite_count,
      full_text: post.full_text,
      user_id: userId[0]
    });
  });
  return Promise.all(postPromises);
}

const createPost = (knex, post) => {
  return knex('posts').insert(post);
};

exports.seed = async (knex) => {
  try {
    await knex('posts').del();
    await knex('users').del();
    let userPromises = usersData.map(user => {
      return createUser(knex, user);
    });
    return Promise.all(userPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
}
