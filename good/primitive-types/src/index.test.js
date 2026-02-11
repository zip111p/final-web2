const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const { readTextFile } = require('../test-utils/readTextFile');
const { waitBrowserLoadEvent } = require('../test-utils/waitBrowserEvent');
const { addFileProtocolToElements } = require('../test-utils/addFileProtocolToElements');
const { replaceScriptSrcFilePathInString } = require('../test-utils/replaceScriptSrcFilePathInString');

describe('Primitive Types', () => {
    let htmlString;

    let dom;
    let document;

    let virtualConsole;
    let consoleLogListener;

    beforeEach(async () => {
        consoleLogListener = jest.fn();
        virtualConsole = new VirtualConsole();
        // You can listen for other console methods as well https://github.com/jsdom/jsdom#virtual-consoles
        virtualConsole.on('log', consoleLogListener);
        
        const filePath = path.join(__dirname, 'index.html');
        htmlString = await readTextFile(filePath);
        const newHtmlString = replaceScriptSrcFilePathInString(htmlString, ['script.js'], __dirname);

        // Create fake DOM
        dom = new JSDOM(newHtmlString, {
            runScripts: 'dangerously',
            resources: 'usable',
            virtualConsole,
        });
        document = dom.window.document;

        // Replace CSS href with absolute paths
        const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
        addFileProtocolToElements(linkElements, 'href', __dirname);
    });

    describe('isValid', () => {
        it('user should be valid when no spaces inside', async () => {
            await waitBrowserLoadEvent(document);

            const isValid = dom.window.isValid;

            expect(isValid('Hulio')).toBe(true);
        });

        it('user should be invalid when name has space inside', async () => {
            await waitBrowserLoadEvent(document);

            const isValid = dom.window.isValid;

            expect(isValid('Stan Lee')).toBe(false);
        });
    });

    describe('countChars', () => {
        it('should count for an empty string', async () => {
            await waitBrowserLoadEvent(document);

            const countChars = dom.window.countChars;

            expect(countChars('')).toBe(0);
        });

        it('should return 0 if the string consists only of spaces', async () => {
            await waitBrowserLoadEvent(document);

            const countChars = dom.window.countChars;

            expect(countChars('      ')).toBe(0);
        });

        it('should return a number of characters in the passed string', async () => {
            await waitBrowserLoadEvent(document);

            const countChars = dom.window.countChars;

            expect(countChars('   sAm   ')).toBe(3);
        });

        it('should return a number of characters in the passed string', async () => {
            await waitBrowserLoadEvent(document);

            const countChars = dom.window.countChars;

            expect(countChars('Thomas')).toBe(6);
        });
    });

    describe('sum', () => {
        it('should return sum of values', async () => {
            await waitBrowserLoadEvent(document);

            const sum = dom.window.sum;

            expect(sum('777', '111')).toBe(888);
        });
    });

    describe('formatMoney', () => {
        it('should format money for a regular number', async () => {
            await waitBrowserLoadEvent(document);

            const formatMoney = dom.window.formatMoney;

            expect(formatMoney(100)).toBe('$100.00');
        });

        it('should format money for a number with decimals', async () => {
            await waitBrowserLoadEvent(document);

            const formatMoney = dom.window.formatMoney;

            expect(formatMoney(100.889)).toBe('$100.89');
        });
    });

    describe('convertToBoolean', () => {
        it('should convert string to boolean', async () => {
            await waitBrowserLoadEvent(document);

            const convertToBoolean = dom.window.convertToBoolean;

            expect(convertToBoolean('Some')).toBe(true);
        });

        it('should convert number to boolean', async () => {
            await waitBrowserLoadEvent(document);

            const convertToBoolean = dom.window.convertToBoolean;

            expect(convertToBoolean(-1)).toBe(true);
        });

        it('should convert undefined to boolean', async () => {
            await waitBrowserLoadEvent(document);

            const convertToBoolean = dom.window.convertToBoolean;

            expect(convertToBoolean(undefined)).toBe(false);
        });

        it('should convert null to boolean', async () => {
            await waitBrowserLoadEvent(document);

            const convertToBoolean = dom.window.convertToBoolean;

            expect(convertToBoolean(null)).toBe(false);
        });

        it('should convert true to boolean', async () => {
            await waitBrowserLoadEvent(document);

            const convertToBoolean = dom.window.convertToBoolean;

            expect(convertToBoolean(true)).toBe(true);
        });
    });
});
