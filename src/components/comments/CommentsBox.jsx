const CommentBox = ({ data }) => {
  return (
    <div className="border-l border-gray-500">
      {data.map((comment, index) => (
        <div className="py-5 pl-16" key={index}>
          <div className="flex items-center gap-3">
            <img
              className="h-12 rounded-full "
              src="https://imgs.search.brave.com/pRZMQx55awU4y3B_AXA9eXbIVTc9NBIfb000CrgxyLU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy91c2Vy/LWljb24tanBnL3Vz/ZXItaWNvbi1qcGct/Ni5qcGc"
              alt="user"
            />
            <p className="font-bold text-xl">{comment.username}</p>
          </div>
          <p className="pl-20">{comment.comment}</p>
          {comment?.replies && <CommentBox data={comment.replies} />}
        </div>
      ))}
    </div>
  );
};

export default CommentBox;
