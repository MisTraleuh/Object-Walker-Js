// IMPORT ALL TESTS

async function runTests(TESTS) {
    return Promise.all(TESTS.map((test) => {
        if (test.run !== undefined) {
            return test.run();
        } else {
            return Promise.resolve();
        }
    })).catch(error => {
        console.error("Une erreur est survenue lors de l'exécution des tests:", error);
    });
}

async function loadTests() {
    return Promise.all([
        import("./testHelp.js"),
        import("./testObj.js")
    ]);
}

function checkError()
{
    let splitter = undefined;
    if (process.platform === "win32") {
        splitter = "\\";
    } else {
        splitter = "/";
    }
    let path = process.cwd().split(splitter)
    let lastPath = path.pop();
    if (lastPath !== "functional") {
        console.error("Please run the tests from the functional directory");
        process.exit(1);
    }
}

async function main() {
    checkError();
    process.chdir("../..");
    let TESTS = await loadTests();
    await runTests(TESTS);
}

main()
