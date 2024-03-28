function reducer(state, action) {
  switch (action.type) {
    case "add": {
      const employeeListdata = [...state.employeeList];
      employeeListdata[action.payLoad - 1].isAdded = true;

      const teamListData = [
        ...state.teamList,
        employeeListdata[action.payLoad - 1],
      ];

      return {
        ...state,
        employeeList: employeeListdata,
        teamList: teamListData,
      };
    }

    case "remove": {
      const employeeListdata = [...state.employeeList];
      employeeListdata[action.payLoad - 1].isAdded = false;

      const teamListData = state.teamList.filter((elem) => {
        if (elem.id === action.payLoad) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        employeeList: employeeListdata,
        teamList: teamListData,
      };
    }

    case "sort": {
      const teamListData = [...state.teamList];
      teamListData.sort((curr, next) => {
        return curr.age - next.age;
      });

      return {
        ...state,
        teamList: teamListData,
      };
    }

    default:
      return { ...state };
  }
}

export default reducer;
