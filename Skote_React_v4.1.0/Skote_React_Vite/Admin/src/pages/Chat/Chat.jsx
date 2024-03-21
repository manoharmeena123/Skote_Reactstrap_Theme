import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { isEmpty, map } from "lodash";
import moment from "moment";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledAlert,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from "reactstrap";
import classnames from "classnames";
import Spinners from "../../components/Common/Spinner";
import { handleSearchData } from "../../components/Common/searchFile";

// simple bar
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

//Import Breadcrumb
import Breadcrumbs from "/src/components/Common/Breadcrumb";

// img
import images from "/src/assets/images";

//redux
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import {
  deleteMessage as onDeleteMessage,
  addMessage as onAddMessage,
  getChats as onGetChats,
  getContacts as onGetContacts,
  getGroups as onGetGroups,
  getMessages as onGetMessages,
} from "/src/store/actions";

// emoji
import EmojiPicker from "emoji-picker-react";

const Chat = props => {

  //meta title
  document.title = "Chat | Skote - Vite React Admin & Dashboard Template";

  const dispatch = useDispatch();

  const selectChatState = (state) => state.chat;

  const ChatProperties = createSelector(
    selectChatState,
    (Chat) => ({
      chats: Chat.chats,
      groups: Chat.groups,
      contacts: Chat.contacts,
      messages: Chat.messages,
      loading: Chat.loading
    })
  );

  const {
    chats,
    groups,
    contacts,
    messages,
    loading
  } = useSelector(ChatProperties);
  const [messagesData, setMessagesData] = useState();
  const [messageBox, setMessageBox] = useState(null);
  // const Chat_Box_Username2 = "Henry Wells"
  const [currentRoomId, setCurrentRoomId] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState({
    name: "Henry Wells",
    isActive: true,
  });
  const [menu1, setMenu1] = useState(false);
  const [search_Menu, setsearch_Menu] = useState(false);
  const [settings_Menu, setsettings_Menu] = useState(false);
  const [other_Menu, setother_Menu] = useState(false);
  const [activeTab, setactiveTab] = useState("1");
  const [Chat_Box_Username, setChat_Box_Username] = useState("Steven Franklin");
  // eslint-disable-next-line no-unused-vars
  const [Chat_Box_User_Status, setChat_Box_User_Status] = useState("online");
  const [curMessage, setcurMessage] = useState("");
  const [isLoading, setLoading] = useState(loading);
  const [selectedImage, setSelectedImage] = useState(null);
  const [emoji, setEmoji] = useState(false);
  const [isdisable, setDisable] = useState(false);

  useEffect(() => {
    dispatch(onGetChats());
    dispatch(onGetGroups());
    dispatch(onGetContacts());
    dispatch(onGetMessages(currentRoomId));
  }, [onGetChats, onGetGroups, onGetContacts, onGetMessages, currentRoomId]);

  useEffect(() => {
    const a = (messages || []).find(i => i.id);
    const a1 = a?.usermessages[a?.usermessages.length - 2]
    const a2 = a?.usermessages[a?.usermessages.length - 1]
    if (a2?.isSameTime) {
      setMessagesData((messages || []).map((item) => {
        const updateMessage = item.usermessages.filter((data) => a2.time === a1.time ?
          { ...data, id: a1.id, to_id: data.to_id, msg: data.msg, isSameTime: a1.time === a2.time, images: data.images, time: a1.time = 0 }
          : { ...item });
        return { ...item, usermessages: updateMessage }
      }))
    } else {
      setMessagesData(messages)
    }
  }, [messages])

  useEffect(() => {
    if (!isEmpty(messages)) scrollToBottom();
  }, [messages]);


  //Toggle Chat Box Menus
  const toggleSearch = () => {
    setsearch_Menu(!search_Menu);
  };

  const toggleSettings = () => {
    setsettings_Menu(!settings_Menu);
  };

  const toggleOther = () => {
    setother_Menu(!other_Menu);
  };

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  };

  //Use For Chat Box
  const userChatOpen = (chats) => {
    setChat_Box_Username(chats.name);
    setChat_Box_User_Status(chats.status)
    setCurrentRoomId(chats.roomId);
    dispatch(onGetMessages(chats.roomId));
  };

  // search data 
  const handeleSearch = (ele) => {
    handleSearchData({ setState: setMessagesData, data: messages, item: ele.value })
  }

  const addMessage = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    if (curMessage !== "" || selectedImage !== null) {
      const message = {
        id: Math.floor(Math.random() * 100),
        to_id: 2,
        msg: curMessage,
        isSameTime: true,
        images: selectedImage,
        time: `${hours}: ${minutes}`,
      };
      dispatch(onAddMessage(message));
      setcurMessage("");
      setDisable(false)
      setEmoji(false);
      setSelectedImage(null)
    }
  };

  // delete msg 
  const [deleteMsg, setDeleteMsg] = useState("");
  const toggle_deleMsg = (id) => {
    setDeleteMsg(!deleteMsg);
    dispatch(onDeleteMessage(id))
  };

  const scrollToBottom = () => {
    if (messageBox) {
      messageBox.scrollTop = messageBox.scrollHeight + 1000;
    }
  };

  const onKeyPress = e => {
    const { key, value } = e;
    if (key === "Enter") {
      setcurMessage(value);
      setDisable(true)
      addMessage();
    }
  };

  //serach recent user
  const searchUsers = () => {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search-user");
    filter = input.value.toUpperCase();
    ul = document.getElementById("recent-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  };

  // scroll simple bar
  const scroollRef = useRef(null);
  useEffect(() => {
    if (scroollRef.current) {
      scroollRef.current.getScrollElement().scrollTop = scroollRef.current.getScrollElement().scrollHeight;
    }
  }, [messages])

  // copy msg
  const [copyMsgAlert, setCopyMsgAlert] = useState(false);
  const copyMsg = (ele) => {
    var copyText = ele.closest(".conversation-list").querySelector("p").innerHTML;
    navigator.clipboard.writeText(copyText);
    setCopyMsgAlert(true)
    if (copyText) {
      setTimeout(() => {
        setCopyMsgAlert(false)
      }, 1000)
    }
  };

  //  img upload
  const handleImageChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setSelectedImage(reader.result);
      setDisable(true)
    };
    reader.readAsDataURL(file);
  };

  // emoji
  const [emojiArray, setemojiArray] = useState("");
  const onEmojiClick = (event, emojiObject) => {
    setemojiArray([...emojiArray, emojiObject.emoji]);
    setcurMessage(curMessage + event.emoji);
    setDisable(true)
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Skote" breadcrumbItem="Chat" />

          <Row>
            <Col lg="12">
              <div className="d-lg-flex">
                <div className="chat-leftsidebar me-lg-4">
                  <div >
                    <div className="py-4 border-bottom">
                      <div className="d-flex">
                        <div className="align-self-center me-3">
                          <img
                            src={images.avatar1}
                            className="avatar-xs rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="font-size-15 mt-0 mb-1">
                            {currentUser.name}
                          </h5>
                          <p className="text-muted mb-0">
                            <i className="mdi mdi-circle text-success align-middle me-2" />
                            Active
                          </p>
                        </div>

                        <div>
                          <Dropdown
                            isOpen={menu1}
                            toggle={() => setMenu1(!menu1)}
                            className="chat-noti-dropdown active"
                          >
                            <DropdownToggle
                              tag="a"
                              className="btn"
                            >
                              <i className="bx bx-bell bx-tada"></i>
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-end">
                              <DropdownItem href="#">Action</DropdownItem>
                              <DropdownItem href="#">Another action</DropdownItem>
                              <DropdownItem href="#">Something else</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>

                    <div className="search-box chat-search-box py-4">
                      <div className="position-relative">
                        <Input
                          onKeyUp={searchUsers}
                          id="search-user"
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                        />
                        <i className="bx bx-search-alt search-icon" />
                      </div>
                    </div>

                    <div className="chat-leftsidebar-nav position-relative">
                      <Nav pills justified>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "1",
                            })}
                            onClick={() => {
                              toggleTab("1");
                            }}
                          >
                            <i className="bx bx-chat font-size-20 d-sm-none" />
                            <span className="d-none d-sm-block">Chat</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "2",
                            })}
                            onClick={() => {
                              toggleTab("2");
                            }}
                          >
                            <i className="bx bx-group font-size-20 d-sm-none" />
                            <span className="d-none d-sm-block">Groups</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "3",
                            })}
                            onClick={() => {
                              toggleTab("3");
                            }}
                          >
                            <i className="bx bx-book-content font-size-20 d-sm-none" />
                            <span className="d-none d-sm-block">Contacts</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={activeTab} className="py-4">
                        <TabPane tabId="1">
                          <div>
                            <h5 className="font-size-14 mb-3">Recent</h5>
                            <ul className="list-unstyled chat-list" id="recent-list">
                              {
                                isLoading ? <Spinners setLoading={setLoading} /> :
                                  <SimpleBar style={{ maxHeight: "410px" }}>
                                    {map(chats, chat => (
                                      <li
                                        key={chat.id + chat.status}
                                        className={
                                          currentRoomId === chat.roomId
                                            ? "active"
                                            : ""
                                        }
                                      >
                                        <Link
                                          to="#"
                                          onClick={() => {
                                            userChatOpen(chat);
                                          }}
                                        >
                                          <div className="d-flex">
                                            <div className="align-self-center me-3">
                                              <i
                                                className={
                                                  chat.status === "online"
                                                    ? "mdi mdi-circle text-success font-size-10"
                                                    : chat.status === "intermediate"
                                                      ? "mdi mdi-circle text-warning font-size-10"
                                                      : "mdi mdi-circle font-size-10"
                                                }
                                              />
                                            </div>
                                            {chat.isImg ?
                                              <div className="avatar-xs align-self-center me-3">
                                                <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                                  {chat.profile}
                                                </span>
                                              </div>
                                              :
                                              <div className="align-self-center me-3">
                                                <img
                                                  src={chat.image}
                                                  className="rounded-circle avatar-xs"
                                                  alt=""
                                                />
                                              </div>
                                            }

                                            <div className="flex-grow-1 overflow-hidden">
                                              <h5 className="text-truncate font-size-14 mb-1">
                                                {chat.name}
                                              </h5>
                                              <p className="text-truncate mb-0">
                                                {chat.description}
                                              </p>
                                            </div>
                                            <div className="font-size-11">
                                              {chat.time}
                                            </div>
                                          </div>
                                        </Link>
                                      </li>
                                    ))}
                                  </SimpleBar>
                              }
                            </ul>
                          </div>
                        </TabPane>

                        <TabPane tabId="2">
                          <h5 className="font-size-14 mb-3">Group</h5>
                          <ul className="list-unstyled chat-list">
                            <SimpleBar style={{ height: "410px" }}>
                              {groups &&
                                groups.map(group => (
                                  <li key={"test" + group.image} className={currentRoomId === group.roomId ? "active" : ""}>
                                    <Link
                                      to="#"
                                      onClick={() => {
                                        userChatOpen(
                                          group
                                        );
                                      }}
                                    >
                                      <div className="d-flex align-items-center">
                                        <div className="avatar-xs me-3">
                                          <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                            {group.image}
                                          </span>
                                        </div>

                                        <div className="flex-grow-1">
                                          <h5 className="font-size-14 mb-0">
                                            {group.name}
                                          </h5>
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                            </SimpleBar>
                          </ul>
                        </TabPane>

                        <TabPane tabId="3">
                          <h5 className="font-size-14 mb-3">Contact</h5>

                          <div>
                            <SimpleBar style={{ height: "410px" }}>
                              {contacts &&
                                contacts.map(contact => (
                                  <div
                                    key={"test_" + contact.category}
                                    className={
                                      contact.category === "A" ? "" : "mt-4"
                                    }
                                  >
                                    <div className="avatar-xs mb-3">
                                      <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                        {contact.category}
                                      </span>
                                    </div>

                                    <ul className="list-unstyled chat-list">
                                      {contact.child.map(array => (
                                        <li key={"test" + array.id} className={currentRoomId === array.roomId ? "active" : ""}>
                                          <Link
                                            to="#"
                                            onClick={() => {
                                              userChatOpen(
                                                array
                                              );
                                            }}
                                          >
                                            <h5 className="font-size-14 mb-0">
                                              {array.name}
                                            </h5>
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                            </SimpleBar>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                  </div>
                </div>
                <div className="w-100 user-chat">
                  <Card>
                    <div className="p-4 border-bottom ">
                      <Row>
                        <Col md="4" xs="9">
                          <h5 className="font-size-15 mb-1">
                            {Chat_Box_Username}
                          </h5>

                          <p className="text-muted mb-0">
                            <i
                              className={
                                Chat_Box_User_Status === "online"
                                  ? "mdi mdi-circle text-success align-middle me-2"
                                  : Chat_Box_User_Status === "intermediate"
                                    ? "mdi mdi-circle text-warning align-middle me-1"
                                    : "mdi mdi-circle align-middle me-1"
                              }
                            />
                            {Chat_Box_User_Status === "online" ? "Active now" : "Offline"}
                          </p>
                        </Col>
                        <Col md="8" xs="3">
                          <ul className="list-inline user-chat-nav text-end mb-0">
                            <li className="list-inline-item d-none d-sm-inline-block">
                              <Dropdown
                                className="me-1"
                                isOpen={search_Menu}
                                toggle={toggleSearch}
                              >
                                <DropdownToggle className="btn nav-btn" tag="a">
                                  <i className="bx bx-search-alt-2" />
                                </DropdownToggle>
                                <DropdownMenu
                                  className="dropdown-menu-md"
                                >
                                  <Form className="p-3">
                                    <FormGroup className="m-0">
                                      <InputGroup>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          placeholder="Search ..."
                                          aria-label="Recipient's username"
                                          onChange={(e) => handeleSearch(e.target)}
                                        />
                                        {/* <InputGroupAddon addonType="append"> */}
                                        <Button color="primary" type="submit">
                                          <i className="mdi mdi-magnify" />
                                        </Button>
                                        {/* </InputGroupAddon> */}
                                      </InputGroup>
                                    </FormGroup>
                                  </Form>
                                </DropdownMenu>
                              </Dropdown>
                            </li>
                            <li className="list-inline-item d-none d-sm-inline-block">
                              <Dropdown
                                isOpen={settings_Menu}
                                toggle={toggleSettings}
                                className="me-1"
                              >
                                <DropdownToggle className="btn nav-btn" tag="a">
                                  <i className="bx bx-cog" />
                                </DropdownToggle>
                                <DropdownMenu>
                                  <DropdownItem href="#">
                                    View Profile
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Clear chat
                                  </DropdownItem>
                                  <DropdownItem href="#">Muted</DropdownItem>
                                  <DropdownItem href="#">Delete</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </li>
                            <li className="list-inline-item">
                              <Dropdown
                                isOpen={other_Menu}
                                toggle={toggleOther}
                              >
                                <DropdownToggle className="btn nav-btn" tag="a">
                                  <i className="bx bx-dots-horizontal-rounded" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem href="#">Action</DropdownItem>
                                  <DropdownItem href="#">
                                    Another Action
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Something else
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>

                    <div>

                      <div className="chat-conversation p-3">

                        <SimpleBar ref={scroollRef} style={{ height: "486px" }}>
                          {isLoading ? <Spinners setLoading={setLoading} /> :
                            <ul className="list-unstyled mb-0">
                              {
                                messagesData && (messagesData || []).map((message) => {
                                  return message.usermessages.map((userMsg, index) => {
                                    return (
                                      <li
                                        key={index}
                                        className={
                                          userMsg.to_id === 1 ? "" : "right"
                                        }
                                      >
                                        <div className="conversation-list">
                                          <UncontrolledDropdown>
                                            <DropdownToggle
                                              href="#!"
                                              tag="a" className="dropdown-toggle"
                                            >
                                              <i className="bx bx-dots-vertical-rounded" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                              <DropdownItem onClick={(e) => copyMsg(e.target)} href="#">
                                                Copy
                                              </DropdownItem>
                                              <DropdownItem href="#">
                                                Save
                                              </DropdownItem>
                                              <DropdownItem href="#">
                                                Forward
                                              </DropdownItem>
                                              <DropdownItem onClick={(e) => toggle_deleMsg(userMsg.id)} href="#">
                                                Delete
                                              </DropdownItem>

                                            </DropdownMenu>
                                          </UncontrolledDropdown>
                                          <div className="ctext-wrap">
                                            <div className="conversation-name">
                                              {userMsg.to_id === 1 ? message.sender : "You"}
                                            </div>
                                            <p>{userMsg.msg}</p>
                                            {userMsg.images && <img src={userMsg.images} alt="" width="150px" />}
                                            {userMsg.time !== 0 && <p className="chat-time mb-0"><i className="bx bx-time-five align-middle me-1"></i>{userMsg.time}</p>}
                                          </div>
                                        </div>
                                      </li>
                                    )
                                  })
                                })
                              }
                            </ul>}
                        </SimpleBar>
                      </div>
                      {
                        selectedImage &&
                        <div className="replymessage-block mb-0 d-flex align-items-start">
                          <div className="flex-grow-1">
                            <img src={selectedImage} alt="select img" style={{ width: "150px", height: "auto" }} />
                          </div>
                          <div className="flex-shrink-0">
                            <button type="button" id="close_toggle" className="btn btn-sm btn-link mt-n2 me-n3 fs-18" onClick={() => setSelectedImage(null)}>
                              <i className="bx bx-x align-middle"></i>
                            </button>
                          </div>
                        </div>
                      }

                      {copyMsgAlert && <UncontrolledAlert color='warning' role="alert">  Message copied</UncontrolledAlert>}
                      {emoji && <EmojiPicker onEmojiClick={onEmojiClick} width={250} height={382} />}
                      <div className="p-3 chat-input-section">
                        <Row>
                          <Col>
                            <div className="position-relative">
                              <input
                                type="text"
                                value={curMessage}
                                onKeyPress={onKeyPress}
                                onChange={e => { setcurMessage(e.target.value); setDisable(true) }}
                                className="form-control chat-input"
                                placeholder="Enter Message..."
                              />
                              <div className="chat-input-links">
                                <ul className="list-inline mb-0">
                                  <li className="list-inline-item" onClick={() => setEmoji(!emoji)}>
                                    <Link to="#">
                                      <i className="mdi mdi-emoticon-happy-outline me-1" id="Emojitooltip" />
                                      <UncontrolledTooltip
                                        placement="top"
                                        target="Emojitooltip"
                                      >
                                        Emojis
                                      </UncontrolledTooltip>
                                    </Link>
                                  </li>
                                  <li className="list-inline-item">
                                    <label htmlFor="imageInput" style={{ color: "#556ee6", fontSize: 16 }}>
                                      <i className="mdi mdi-file-image-outline me-1" id="Imagetooltip" />
                                      <UncontrolledTooltip placement="top" target="Imagetooltip">
                                        Images
                                      </UncontrolledTooltip>
                                    </label>
                                    <input type="file" id="imageInput" className="d-none" onChange={handleImageChange} />
                                  </li>
                                  <li className="list-inline-item">
                                    <Link to="#">
                                      <i className="mdi mdi-file-document-outline" id="Filetooltip" />
                                      <UncontrolledTooltip placement="top" target="Filetooltip">
                                        Add Files
                                      </UncontrolledTooltip>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Col>
                          <Col className="col-auto">
                            <Button
                              type="button"
                              color="primary"
                              disabled={!isdisable}
                              onClick={() => addMessage()}
                              className="btn btn-primary btn-rounded chat-send w-md "
                            >
                              <span className="d-none d-sm-inline-block me-2">
                                Send
                              </span>{" "}
                              <i className="mdi mdi-send" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Col>
          </Row >
        </Container >
      </div >
    </React.Fragment >
  );
};

Chat.propTypes = {
  chats: PropTypes.array,
  groups: PropTypes.array,
  contacts: PropTypes.array,
  messages: PropTypes.array,
  onGetChats: PropTypes.func,
  onGetGroups: PropTypes.func,
  onGetContacts: PropTypes.func,
  onGetMessages: PropTypes.func,
  onAddMessage: PropTypes.func,
};

export default Chat;
