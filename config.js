module.exports = {
    app: {
        token: 'MTA5ODEzMDIxOTcwMjk2NDMwNA.GQNAnP.zOqowYe86GUSpEFqeCgyEVlzXKweHVfmFvS1kw',
        playing: 'by Heart ❤️',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 50,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
