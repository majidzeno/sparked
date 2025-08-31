const vscode = require('vscode');

// Define the snippets data
const snippets = {
    // Spacing
    '4px': '$spark-spacing-half-x',
    '8px': '$spark-spacing-1x',
    '16px': '$spark-spacing-2x',
    '24px': '$spark-spacing-3x',
    '32px': '$spark-spacing-4x',
    '40px': '$spark-spacing-5x',
    '48px': '$spark-spacing-6x',
    '56px': '$spark-spacing-7x',
    '64px': '$spark-spacing-8x',
    '72px': '$spark-spacing-9x',
    
    // Font sizes
    '10px': '$spark-text-font-size-tiny',
    '12px': '$spark-text-font-size-xsmall',
    '14px': '$spark-text-font-size-small',
    '16px': '$spark-text-font-size-medium',
    '20px': '$spark-text-font-size-large',
    '24px': '$spark-text-font-size-xlarge',
    '32px': '$spark-text-font-size-super',
    '48px': '$spark-text-font-size-xsuper',
    
    // Font weights
    'normal': '$spark-text-font-weight-normal',
    'semibold': '$spark-text-font-weight-semibold',
    '600': '$spark-text-font-weight-semibold',
    'bold': '$spark-text-font-weight-bold',
    
    // Border radius
    '2px': '$spark-border-radius-small',
    '4px': '$spark-border-radius',
    '6px': '$spark-border-radius-medium',
    '30em': '$spark-border-radius-rounded',
    
    // Colors - Blues
    '#f4f6f9': '$spark-color-navy-blue-lightest',
    '#F4F6F9': '$spark-color-navy-blue-lightest',
    '#e5e9f1': '$spark-color-navy-blue-lighter',
    '#E5E9F1': '$spark-color-navy-blue-lighter',
    '#325294': '$spark-color-navy-blue-light',
    '#00287a': '$spark-color-navy-blue',
    '#00287A': '$spark-color-navy-blue',
    '#002061': '$spark-color-navy-blue-dark',
    '#00143d': '$spark-color-navy-blue-darker',
    '#00143D': '$spark-color-navy-blue-darker',
    '#333944': '$spark-color-navy-blue-text',
    '#f4f9ff': '$spark-color-blue-25',
    '#F4F9FF': '$spark-color-blue-25',
    '#e7f3ff': '$spark-color-blue-50',
    '#E7F3FF': '$spark-color-blue-50',
    '#cee7fe': '$spark-color-blue-100',
    '#CEE7FE': '$spark-color-blue-100',
    '#9dd0fe': '$spark-color-blue-200',
    '#9DD0FE': '$spark-color-blue-200',
    '#6cb8fd': '$spark-color-blue-300',
    '#6CB8FD': '$spark-color-blue-300',
    '#3ba1fd': '$spark-color-blue-400',
    '#3BA1FD': '$spark-color-blue-400',
    '#0a89fc': '$spark-color-blue-500',
    '#0A89FC': '$spark-color-blue-500',
    '#0056c9': '$spark-color-blue-600',
    '#28435b': '$spark-color-blue-text',
    '#28435B': '$spark-color-blue-text',
    
    // Colors - Greens
    '#f4fcf8': '$spark-color-green-lightest',
    '#F4FCF8': '$spark-color-green-lightest',
    '#e5f8ef': '$spark-color-green-lighter',
    '#E5F8EF': '$spark-color-green-lighter',
    '#32cb82': '$spark-color-green-light',
    '#32CB82': '$spark-color-green-light',
    '#00bf63': '$spark-color-green',
    '#00BF63': '$spark-color-green',
    '#00984f': '$spark-color-green-dark',
    '#00984F': '$spark-color-green-dark',
    '#005f31': '$spark-color-green-darker',
    '#005F31': '$spark-color-green-darker',
    '#32503c': '$spark-color-green-text',
    '#32503C': '$spark-color-green-text',
    
    // Colors - Yellows
    '#fffcf4': '$spark-color-yellow-lightest',
    '#FFFCF4': '$spark-color-yellow-lightest',
    '#fff8e5': '$spark-color-yellow-lighter',
    '#FFF8E5': '$spark-color-yellow-lighter',
    '#ffc932': '$spark-color-yellow-light',
    '#FFC932': '$spark-color-yellow-light',
    '#ffbc00': '$spark-color-yellow',
    '#FFBC00': '$spark-color-yellow',
    '#cc9600': '$spark-color-yellow-dark',
    '#CC9600': '$spark-color-yellow-dark',
    '#7f5e00': '$spark-color-yellow-darker',
    '#7F5E00': '$spark-color-yellow-darker',
    '#604f36': '$spark-color-yellow-text',
    '#604F36': '$spark-color-yellow-text',
    
    // Colors - Oranges
    '#fffbf4': '$spark-color-orange-lightest',
    '#FFFBF4': '$spark-color-orange-lightest',
    '#fff6e5': '$spark-color-orange-lighter',
    '#FFF6E5': '$spark-color-orange-lighter',
    '#ffa232': '$spark-color-orange-light',
    '#FFA232': '$spark-color-orange-light',
    '#ffa500': '$spark-color-orange',
    '#FFA500': '$spark-color-orange',
    '#cc8400': '$spark-color-orange-dark',
    '#CC8400': '$spark-color-orange-dark',
    '#7f5200': '$spark-color-orange-darker',
    '#7F5200': '$spark-color-orange-darker',
    '#624b35': '$spark-color-orange-text',
    '#624B35': '$spark-color-orange-text',
    
    // Colors - Reds
    '#fef7f5': '$spark-color-red-lightest',
    '#FEF7F5': '$spark-color-red-lightest',
    '#fdece8': '$spark-color-red-lighter',
    '#FDECE8': '$spark-color-red-lighter',
    '#f4674c': '$spark-color-red-light',
    '#F4674C': '$spark-color-red-light',
    '#f24220': '$spark-color-red',
    '#F24220': '$spark-color-red',
    '#c13419': '$spark-color-red-dark',
    '#C13419': '$spark-color-red-dark',
    '#792110': '$spark-color-red-darker',
    '#603a36': '$spark-color-red-text',
    '#603A36': '$spark-color-red-text',
    
    // Colors - Skys
    '#ffffff': '$spark-color-sky-white',
    '#FFFFFF': '$spark-color-sky-white',
    '#fcfcfd': '$spark-color-sky-lightest',
    '#FCFCFD': '$spark-color-sky-lightest',
    '#f9fafc': '$spark-color-sky-lighter',
    '#F9FAFC': '$spark-color-sky-lighter',
    '#f2f4f8': '$spark-color-sky-light',
    '#F2F4F8': '$spark-color-sky-light',
    '#dcdee3': '$spark-color-sky-dark',
    '#DCDEE3': '$spark-color-sky-dark',
    '#b7bac0': '$spark-color-sky-darker',
    '#B7BAC0': '$spark-color-sky-darker',
    
    // Colors - Ink
    '#a1a7b2': '$spark-color-ink-lightest',
    '#A1A7B2': '$spark-color-ink-lightest',
    '#737c8b': '$spark-color-ink-lighter',
    '#737C8B': '$spark-color-ink-lighter',
    '#445065': '$spark-color-ink-light',
    '#16253f': '$spark-color-ink',
    '#16253F': '$spark-color-ink',
    
    // Colors - Black
    '#e5e5e5': '$spark-color-black-lightest',
    '#E5E5E5': '$spark-color-black-lightest',
    '#999999': '$spark-color-black-lighter',
    '#4c4c4c': '$spark-color-black-light',
    '#4C4C4C': '$spark-color-black-light',
    '#000000': '$spark-color-black',
    
    // Colors - Greys
    '#f2f2f2': '$spark-color-grey-lightest',
    '#F2F2F2': '$spark-color-grey-lightest',
    '#cccccc': '$spark-color-grey-lighter',
    '#CCCCCC': '$spark-color-grey-lighter',
    '#a6a6a6': '$spark-color-grey-light',
    '#A6A6A6': '$spark-color-grey-light',
    '#808080': '$spark-color-grey',
    
    // Special colors
    'transparent': '$spark-color-transparent',
    
    // Sequential colors
    '#043489': '$spark-color-sequential-1',
    '#094ca5': '$spark-color-sequential-2',
    '#094CA5': '$spark-color-sequential-2',
    '#0b58b3': '$spark-color-sequential-3',
    '#0B58B3': '$spark-color-sequential-3',
    '#0b6ecd': '$spark-color-sequential-4',
    '#0B6ECD': '$spark-color-sequential-4',
    '#0a78d9': '$spark-color-sequential-5',
    '#0A78D9': '$spark-color-sequential-5',
    '#2285dc': '$spark-color-sequential-6',
    '#2285DC': '$spark-color-sequential-6',
    '#3a93e0': '$spark-color-sequential-7',
    '#3A93E0': '$spark-color-sequential-7',
    '#53a0e4': '$spark-color-sequential-8',
    '#53A0E4': '$spark-color-sequential-8',
    '#6caee8': '$spark-color-sequential-9',
    '#6CAEE8': '$spark-color-sequential-9',
    '#84bbec': '$spark-color-sequential-10',
    '#84BBEC': '$spark-color-sequential-10',
    '#9dc9ef': '$spark-color-sequential-11',
    '#9DC9EF': '$spark-color-sequential-11',
    '#b5d6f3': '$spark-color-sequential-12',
    '#B5D6F3': '$spark-color-sequential-12',
    '#cee4f7': '$spark-color-sequential-13',
    '#CEE4F7': '$spark-color-sequential-13',
    '#e6f1fb': '$spark-color-sequential-14',
    '#E6F1FB': '$spark-color-sequential-14',
    
    // Categorical colors
    '#7f93bc': '$spark-color-categorical-navy-blue',
    '#7F93BC': '$spark-color-categorical-navy-blue',
    '#7fccff': '$spark-color-categorical-blue',
    '#7FCCFF': '$spark-color-categorical-blue',
    '#7fdfb1': '$spark-color-categorical-green',
    '#7FDFB1': '$spark-color-categorical-green',
    '#ffdd7f': '$spark-color-categorical-yellow',
    '#FFDD7F': '$spark-color-categorical-yellow',
    '#ffc57f': '$spark-color-categorical-orange',
    '#FFC57F': '$spark-color-categorical-orange',
    '#f8a08f': '$spark-color-categorical-red',
    '#F8A08F': '$spark-color-categorical-red',
    
    // rem-calc variations
    'rem-calc(4px)': '$spark-spacing-half-x',
    'rem-calc(8px)': '$spark-spacing-1x',
    'rem-calc(16px)': '$spark-spacing-2x',
    'rem-calc(24px)': '$spark-spacing-3x',
    'rem-calc(32px)': '$spark-spacing-4x',
    'rem-calc(40px)': '$spark-spacing-5x',
    'rem-calc(48px)': '$spark-spacing-6x',
    'rem-calc(56px)': '$spark-spacing-7x',
    'rem-calc(64px)': '$spark-spacing-8x',
    'rem-calc(72px)': '$spark-spacing-9x',
    'rem-calc(2px)': '$spark-border-radius-small',
    'rem-calc(6px)': '$spark-border-radius-medium'
};

class SparkedCompletionProvider {
    provideCompletionItems(document, position, token, context) {
        // Get the current word at cursor position
        const wordRange = document.getWordRangeAtPosition(position);
        if (!wordRange) {
            return [];
        }
        
        const currentWord = document.getText(wordRange);
        if (!currentWord) {
            return [];
        }
        
        const completionItems = [];
        
        // Find matching snippets
        for (const [key, value] of Object.entries(snippets)) {
            if (key.toLowerCase().includes(currentWord.toLowerCase()) || 
                currentWord.toLowerCase().includes(key.toLowerCase()) ||
                key.toLowerCase() === currentWord.toLowerCase()) {
                
                const item = new vscode.CompletionItem(
                    value,
                    vscode.CompletionItemKind.Variable
                );
                
                item.detail = `Sparked: ${key}`;
                item.documentation = `Replace "${key}" with "${value}"`;
                item.insertText = value;
                item.sortText = '0'; // Ensure our suggestions appear first
                item.range = wordRange; // Replace the current word
                
                completionItems.push(item);
            }
        }
        
        return completionItems;
    }
}

function activate(context) {
    // Register the completion provider
    const completionProvider = vscode.languages.registerCompletionItemProvider(
        ['*'], // All languages
        new SparkedCompletionProvider()
    );
    
    context.subscriptions.push(completionProvider);
    
    // Keep the original command for backward compatibility
    let disposable = vscode.commands.registerCommand('sparked.showSnippets', () => {
        // Trigger suggestions to show our completion items
        vscode.commands.executeCommand('editor.action.triggerSuggest');
    });
    
    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
