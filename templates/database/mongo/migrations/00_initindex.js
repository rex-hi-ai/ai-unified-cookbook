module.exports = {
  async up(db, client) {
    console.log("Creating indexes for sample.profile collection...");

    const profile = db.collection("sample.profile");

    await profile.createIndex(
      { sampleId: 1 },
      {
        name: "mainIX",
        unique: true
      }
    );

    await profile.createIndex(
      { sampleCode: 1 },
      {
        name: "secondaryIX",
        unique: true
      }
    );

    await profile.createIndex(
      { PlatformId: 1 },
      {
        name: "thirdlyIX",
        unique: true
      }
    );

    await profile.createIndex(
      { "KeyCloak.PlatformIdentity": 1 },
      {
        name: "forthIX",
        unique: true,
        partialFilterExpression: { "KeyCloak.PlatformIdentity": { $exists: true } },
        collation: { locale: "en", strength: 2 }
      }
    );

    console.log("Indexes for sample.profile created.");
  }
};
