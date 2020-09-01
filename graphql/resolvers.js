const Person = {
    name: "enosh",
    age: 40
}

const People = [
    {
        name: "enosh",
        age: 40
    },
    {
        name: "John",
        age: 39
    }
]

const resolvers = {
    Query: {
        person: () => Person,
        people: ()=> People
    }
};

export default resolvers;