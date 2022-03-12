import React, { useEffect, useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios, { BASE_URI } from '../../../api/axios';
import Comments from './Comments/Comments';
import LikeDislikes from './LikeDislikes/LikeDislikes';
import Sidebar from './Sidebar/Sidebar';

const DetailVideo = () => {
  const { id } = useParams();

  const videos = useSelector((state) => state.videos.videos);
  const video = videos.filter((video) => video._id === id)[0];
  const uId = useSelector((state) => state.user.uId);

  const [commentLists, setCommentLists] = useState([]);

  const updateComment = (newComment) => {
    setCommentLists([...commentLists, newComment]);
  };

  useEffect(() => {
    axios.get(`/comment/all/?id=${id}`).then((response) => {
      if (response.data.success) {
        setCommentLists(response.data.comments);
      } else {
        alert('Failed to get video Info');
      }
    });
  }, [id]);

  return (
    <div
      className="mt-[80px] px-4"
      style={{ minHeight: 'calc(100vh - 700px)' }}
    >
      {/* video and video side card */}
      <div className="grid md:grid-cols-12">
        <div className="w-full col-span-8">
          {/* video */}
          <div>
            <video
              className="w-full"
              src={`${BASE_URI}/${video?.video?.path}`}
              controls
            ></video>
          </div>
          {/* video related info */}
          <div className="px-2 space-y-6 mt-6">
            <div className="space-y-3">
              {/* video title */}
              <div className="w-5/6">
                <h3>{video?.title}</h3>
              </div>
              {/* like, dislike and favourite button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    className="h-16 rounded-2xl"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDgyaDCaoDZJx8N9BBE6eXm5uXuObd6FPeg&usqp=CAU"
                    alt="profile"
                  />
                  <p>
                    Published by <br />
                    {video?.author}
                  </p>
                </div>
                <div className="flex items-center space-x-6 mr-20 dark:text-white">
                  <LikeDislikes video={video} videoId={id} uId={uId} />
                  <BsBookmark size={30} className="cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <p>About this video</p>
              <p>{video?.about}</p>
            </div>
          </div>
        </div>

        {/* sidebar */}
        <div className="col-span-4 mt-6 md:mt-0 mx-6">
          <h3 className="my-4">Related videos</h3>
          <Sidebar />
        </div>
      </div>
      {/* comment section */}
      <div className="md:w-4/6">
        <Comments
          postId={id}
          updateComment={updateComment}
          commentLists={commentLists}
        />
      </div>
    </div>
  );
};

export default DetailVideo;
