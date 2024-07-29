
export const classifyUsers = (users) => {
    console.log("Classifying users:", users); // Log users to be classified
    const commonAttributes = ['hobby', 'state', 'workplace'];
    const attributeDict = {};

    // Initialize dictionary with attributes as keys and empty arrays as values
    commonAttributes.forEach(attr => {
      attributeDict[attr] = {};
    });

    // Classify users based on common attributes
    users.forEach(user => {
      commonAttributes.forEach(attr => {
        const userAttributeValue = user[attr];
        if (userAttributeValue) {
          if (!attributeDict[attr][userAttributeValue]) {
            attributeDict[attr][userAttributeValue] = [];
          }
          attributeDict[attr][userAttributeValue].push(user);
        }
      });
    });

    return attributeDict;
  };


export const classifySpecificUser = (classifiedUsers, user) => {
    const commonHobby = classifiedUsers['hobby'][user.hobby];
    const commonState = classifiedUsers['state'][user.state];
    const commonWorkplace = classifiedUsers['workplace'][user.workplace];

    return { commonHobby, commonState, commonWorkplace };
  };

