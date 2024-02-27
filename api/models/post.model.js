import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        'https://media.istockphoto.com/id/656285386/vector/demo-sign-on-cubes.jpg?s=612x612&w=0&k=20&c=bV-ZK8jMG-SQcjvmz-BvtTWBuxwsSQiqsOruLbo1MwE=',
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;