const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('sparked.showSnippets', () => {
        // Trigger the default "Insert Snippet" command which will show all available snippets
        vscode.commands.executeCommand('editor.action.insertSnippet');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
