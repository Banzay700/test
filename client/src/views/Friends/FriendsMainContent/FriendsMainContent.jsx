import { useLocalStorage } from 'usehooks-ts'

import { Divider } from '@mui/material'
import { FriendsList } from '../../../components/friends-page-components'
import {
  useAcceptFriendRequestMutation,
  useAvailableFriendRequestsQuery,
  useDeclineFriendRequestMutation,
  useGetFriendsListQuery,
  useSendFriendRequestMutation,
} from '../../../store/services/friendService'
import { useGetUsersQuery } from '../../../store/services/usersService'
import { useGetSuggestions } from '../../../hooks'
import { LS_KEYS } from '../../../utils/constants'
import { MainContentWrapper } from './FriendsMainContent.styled'

const FriendsMainContent = () => {
  const userId = localStorage.getItem('userId')
  const [hiddenUsersId, setHiddenUsersId] = useLocalStorage(
    LS_KEYS.HIDDEN_USERS,
    [],
  )

  const { data: friends } = useGetFriendsListQuery(userId)
  const { data: users, isLoading: isUsersLoading } = useGetUsersQuery()
  const { data: requests, isLoading: isRequestsLoading } =
    useAvailableFriendRequestsQuery()
  const [acceptFriendRequest] = useAcceptFriendRequestMutation()
  const [declineFriendRequest] = useDeclineFriendRequestMutation()
  const [sendFriendRequest] = useSendFriendRequestMutation()

  const knownUsers = useGetSuggestions(userId, users, requests, friends)

  const handleMessage = (id) => {
    console.log(`start messages with user ${id}`)
  }

  const handleConfirm = (e, id) => {
    e.stopPropagation()
    acceptFriendRequest({ userId: id })
  }

  const handleDecline = (e, id) => {
    e.stopPropagation()
    declineFriendRequest({ userId: id })
  }

  const handleDontShowUser = (e, id) => {
    e.stopPropagation()
    setHiddenUsersId([...hiddenUsersId, id])
  }

  return (
    <MainContentWrapper>
      <FriendsList
        variant="requests"
        users={requests?.content}
        isLoading={isRequestsLoading}
        heading="Friend Requests"
        link={'/friends/requests'}
        onConfirm={handleConfirm}
        onDecline={handleDecline}
      />
      <Divider orientation="horizontal" />
      <FriendsList
        variant="friends"
        users={knownUsers}
        isLoading={isUsersLoading}
        heading="People you may know"
        link={'/friends'}
        onAddFriend={sendFriendRequest}
        onMessage={handleMessage}
        onDecline={handleDecline}
        onDontShowClick={handleDontShowUser}
      />
    </MainContentWrapper>
  )
}

FriendsMainContent.displayName = 'FriendsMainContent'

export default FriendsMainContent
