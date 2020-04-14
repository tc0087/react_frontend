import React from 'react'
import {FiMessageCircle, FiHeart, FiFlag, FiUser} from 'react-icons/fi';
import ClampLines from 'react-clamp-lines';
var moment = require('moment');
moment.updateLocale('en', {
  relativeTime: {
    s:  'sec',
    ss: '%ss',
    m:  'a minute',
    mm: '%dm',
    h:  '%dh',
    hh: '%dh',
    d:  'a day',
    dd: '%dd',
    M:  'a month',
    MM: '%dM',
    y:  'a year',
    yy: '%dY'
  }
});

const textPost = ({
	post
}) => (
  <div className="post-wrapper margin-bottom-30">
    <div className="border-grey radius-5 shadow-light overflow-hidden">
      <div className="post-header flex-col background-white">
          <div className="flex-row width-100 space-between height-60p">
              <div className="post-header-left flex-row centered-vertical">
                  {post.profile.main_pic ?
                      <div className="height-40p width-40p radius-20 margin-left-10 centered">
                          <img src={post.profile.main_pic} className="post-pic pointer" alt="" />
                      </div>
                  :
                      <div className="height-40p width-40p radius-20 border-grey margin-left-10 centered">
                          <FiUser />
                      </div>
                  }
                  <div className="margin-left-5 flex-col">
                      <div className="flex-row centered">
                          <div className="text-16 pointer text-heavy">{post.profile.username}</div>
                          <div className="margin-horizontal-5 height-4p width-4p radius-2 background-pink"></div>
                          <div className="text-extra-small">{moment(post.created_at).fromNow(true)}</div>
                      </div>
                      {post.location_name ? <div className="text-light-grey text-extra-small line-1em pointer">{post.location_name}</div> : null}
                  </div>
              </div>
              {post.boutIt ?
              <div className="post-header-right flex-row centered-vertical">
                  <div className="margin-right-5 boutIt-title-wrapper pointer" >
                      <ClampLines
                        buttons={false}
                        text={post.boutIt.title ? post.boutIt.title : post.boutIt.type_text}
                        className="boutIt-title text-heavy"
                        lines={2}
                        ellipsis="..."
                      />
                  </div>
                  {post.boutIt ?
                      <div className="height-30p width-30p radius-15 margin-right-10 pointer centered">
                          <img src={post.boutIt.main_pic} className="post-pic" alt="" />
                      </div>
                  :
                      <div className="height-30p width-30p radius-15 border-grey margin-right-10 pointer centered">
                          <FiUser />
                      </div>
                  }
              </div> : null}
          </div>
          <div className="post-padding pointer">
              <ClampLines
                buttons={false}
                text={post.text}
                className="text-caption"
                lines={2}
                ellipsis="..."
              />
          </div>
      </div>
      <div className="post-footer space-between flex-row border-top-grey background-white">
          <div className="post-footer-left flex-row centered-vertical flex-row">
              <div className="flex-row centered">
                  <FiMessageCircle
                      // fill={state.like_ids.includes(post._id) ? "#73c2fb" : '#fff'}
                      // color={state.like_ids.includes(post._id) ? "#73c2fb" : "#555"}
                      className="text-24 margin-left-10 pointer"
                      // onClick={() => history.push(`/${post.boutIt._id}/${post._id}/${post.creator_id}/comments`)}
                  />
                  {post.comment_count > 0 ? <div className="margin-left-5 pointer">{post.comment_count}</div> : null}
              </div>
              <div className="flex-row centered">
                  <FiHeart
                      // fill={state.like_ids.includes(post._id) ? "#ff6347" : '#fff'}
                      // color={state.like_ids.includes(post._id) ? "#ff6347" : "#555"}
                      className="text-24 margin-left-10 pointer"
                  />
                  {post.like_count > 0 ? <div className="margin-left-5">{post.like_count}</div> : null}
              </div>
          </div>
          <div className="post-footer-right flex-row centered-vertical">
              <div>
                  <FiFlag
                      // fill={state.flag_ids.includes(post._id) ? "#555" : '#fff'}
                      className="text-24 text-grey margin-right-10 pointer"
                  />
              </div>
          </div>
      </div>
    </div>
  </div>
)

export default textPost