use sample;

initIndexes = {
    start: function () {
        db.getCollection("sample.profile").createIndex(
            { 'sampleId': 1}, 
            { 
                'name': "mainIX", 
                'unique': true
            });
        db.getCollection("sample.profile").createIndex(
            { 'sampleCode': 1},
            {
                'name': "secondaryIX",
                'unique': true
            });
        db.getCollection("sample.profile").createIndex(
            { 'PlatformId': 1},
            {
                'name': "thirdlyIX",
                'unique': true
            });
        db.getCollection("sample.profile").createIndex(
            { 'KeyCloak.PlatformIdentity': 1},
            {
                'name': "forthIX",
                'unique': true,
                'partialFilterExpression': { "KeyCloak.PlatformIdentity": { '$exists': true } },
                'collation': { 'locale': 'en', 'strength': 2 }
            });
    }
};

initIndexes.start();
