// level 3


async function getUsers(users) {
    const new_users = [];

    users.map((usr, i) => {
        new_users.push({ ...usr, id: i })
    })

    return new_users;
}