import CommentBox from "./CommentsBox";

const data = [
  {
    username: "Ankur Srivastav",
    comment: "Hi this is a new message from the username",
    replies: [
      {
        username: "Manish Jangra",
        comment: "Hi this is a new message from the username",
      },
      {
        username: "Manish Jangra",
        comment: "Hi this is a new message from the username",
      },
    ],
  },
  {
    username: "Vijay Rana",
    comment: "Hi this is a new message from the username",
    replies: [
      {
        username: "Manish Jangra",
        comment: "Hi this is a new message from the username",
        replies: [
          {
            username: "Manish Jangra",
            comment: "Hi this is a new message from the username",
          },
          {
            username: "Manish Jangra",
            comment: "Hi this is a new message from the username",
            replies: [
              {
                username: "Manish Jangra",
                comment: "Hi this is a new message from the username",
                replies: [
                  {
                    username: "Manish Jangra",
                    comment: "Hi this is a new message from the username",
                    replies: [
                      {
                        username: "Manish Jangra",
                        comment: "Hi this is a new message from the username",
                      },
                    ],
                  },
                ],
              },
              {
                username: "Manish Jangra",
                comment: "Hi this is a new message from the username",
              },
              {
                username: "Vijay Rana",
                comment: "Hi this is a new message from the username",
              },
            ],
          },
        ],
      },
      {
        username: "Manish Jangra",
        comment: "Hi this is a new message from the username",
      },
    ],
  },
  {
    username: "Satish Singh",
    comment: "Hi this is a new message from the username",
    replies: [
      {
        username: "Manish Jangra",
        comment: "Hi this is a new message from the username",
      },
    ],
  },
];

const Comments = () => {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
};

export default Comments;
