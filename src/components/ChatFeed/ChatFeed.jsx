import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

function ChatFeed(props) {
    const {chats, activeChat, userName, messages} = props

    const chat = chats && chats[activeChat]

    // console.log(messages)
    //to see if messagehas been read
    const renderReadReceipts = (message, isMyMessage) =>{
        chat.people.map((person, index)=> person.last_read === message.id && (
            <div key={`read_${index}`} style={{float: isMyMessage ? 'right' : 'left'}}>
                seen
            </div>
        ))
    }

    const renderMessages = () =>{
        const keys = Object.keys(messages)
        // console.log(keys)

        return keys.map((key, index)=>{
            const message = messages[key]

            const lastMessageKey = index === 0 ? null: keys[index-1]
            const isMyMessage = userName === message.sender.username;

            return(
                <div key={`msg_${index}`} className="w-full">
                    <div className="msg-block">
                        {
                            isMyMessage ? <MyMessage message={message} /> : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipts" className={`${isMyMessage ? 'ml-0' : 'ml-24'}`}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        })
    }

    // console.log(activeChat)

    if(!chat) return 'Loading'

    return (
        <div className="chat-feed flex flex-col min-h-screen">
            <div className="chat-title-container">
                {/* <div className="chat">{chat.title}</div> */}
                <div className="chat-subtitle w-full text-left font-semibold flex flex-row items-center p-4 shadow">
                    {/* <span>{chat.people.map(person=> `${person.person.propic}`)}</span> */}
                    {/* <p>{chat.people.map(person=> `${person.person.username}`)}</p> */}
                    {/* <p>{chat.people.map(person=> `${person.person.username}`)}</p> */}
                    <img src={chat.people[0].person.avatar} alt="" className="h-12 w-12 bg-gray-50 rounded-full mr-2" />
                    <p>{chat.people[0].person.username}</p>
                </div>
            </div>
            <div className="flex-1 w-full">
                {renderMessages()}
            </div>
            <div className="flex-1 flex-grow" />
            <div className="absolute bottom-24 w-full">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed
