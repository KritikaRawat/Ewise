// import React, { createContext, useContext, useState } from 'react';

// const RewardContext = createContext();

// export const RewardProvider = ({ children }) => {
//   const [userRewards, setUserRewards] = useState({});

//   const updateRewardPoints = (email, points) => {
//     setUserRewards((prevUserRewards) => ({
//       ...prevUserRewards,
//       [email]: (prevUserRewards[email] || 0) + points,
//     }));
//   };

//   return (
//     <RewardContext.Provider value={{ userRewards, updateRewardPoints }}>
//       {children}
//     </RewardContext.Provider>
//   );
// };

// export const useRewardContext = () => {
//   return useContext(RewardContext);
// // }

// import React, { createContext, useContext, useReducer } from 'react';

// const RewardPointsContext = createContext();

// const initialState = {
//   rewardPoints: 0,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT_POINTS':
//       return { ...state, rewardPoints: state.rewardPoints + 2 };
//     default:
//       return state;
//   }
// };

// export const RewardPointsProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <RewardPointsContext.Provider value={{ state, dispatch }}>
//       {children}
//     </RewardPointsContext.Provider>
//   );
// };

// export const useRewardPoints = () => {
//   const context = useContext(RewardPointsContext);
//   if (!context) {
//     throw new Error('useRewardPoints must be used within a RewardPointsProvider');
//   }
//   return context;
// };


// Assuming your reducer looks something like this
import React, { createContext, useReducer, useContext } from 'react';

const RewardContext = createContext();

const initialState = {
  rewardPointsMap: {},
};

const rewardReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_POINTS':
      const { cardId } = action;
      return {
        ...state,
        rewardPointsMap: {
          ...state.rewardPointsMap,
          [cardId]: (state.rewardPointsMap[cardId] || 0) + 1,
        },
      };
    default:
      return state;
  }
};

const RewardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rewardReducer, initialState);

  return (
    <RewardContext.Provider value={{ state, dispatch }}>
      {children}
    </RewardContext.Provider>
  );
};

const useRewardPoints = () => {
  const context = useContext(RewardContext);
  if (!context) {
    throw new Error('useRewardPoints must be used within a RewardContextProvider');
  }
  return context;
};

export { RewardContextProvider, useRewardPoints };