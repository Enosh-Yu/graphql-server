const Person = {
    name: "enosh",
    age: 40
}

const resolvers = {
    Query: {
        person: () => Person
    }
};

export default resolvers;