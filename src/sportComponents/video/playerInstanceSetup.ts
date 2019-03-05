import _ from "lodash";
function _arrayBufferToBase64(buffer: any) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;

    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

function playerInstanceSetup(playbackData: any) {
    let sources: any = [];
    let playbackDataItems = _.get(playbackData.playback, ["items", "item"], []);
    if (!_.isArray(playbackDataItems)) {
        playbackDataItems = [playbackDataItems];
    }
    const assetLive = true;

    _.each(playbackDataItems, item => {
        let drmObj: any = {};
        let sourceUrl = _.get(item, "url");
        const isEdgeware = _.get(item, "streamsProvider");
        const protocol = (_.get(item, "protocol", "")).toLowerCase();

        let licenseName = _.get(item, ["license", "@name"]);
        let licenseUrl = _.get(item, ["license", "@uri"]);
        const protocolAndDRM = {
            "protocol": "dash",
            "drm": "widevine",
        };
        const parsedDRM = _.get(protocolAndDRM, "drm");
        if (isEdgeware && isEdgeware === "infinit") {
            const drmData = _.get(item, ["license", "drmData"]);
            // const drmKey = _.get(item, ["license", "key"]);
            const headerName = "X-AxDRM-Message";

            // Edgeware
            switch (protocol) {
                case "dash":
                    {
                        let licenseCertificate = "https://drm-widevine-licensing.axprod.net/ServiceCertificate";
                        licenseName = parsedDRM;

                        if (parsedDRM === "playready") {
                            licenseUrl = "https://drm-playready-licensing.axprod.net/AcquireLicense";
                            licenseCertificate = "https://drm-playready-licensing.axprod.net/ServiceCertificate";
                        }

                        drmObj[licenseName] = {
                            "url": licenseUrl,
                            "serverCertificateUrl": licenseCertificate,
                            "licenseRequestHeaders": [{
                                "name": headerName,
                                "value": drmData,
                            }],
                        };
                        break;
                    }
                case "hls":
                    {
                        drmObj[licenseName] = {
                            "certificateUrl": "https://infinit.blob.core.windows.net/fairplay/fairplayDER.cer",
                            "processSpcUrl": licenseUrl,
                            "licenseRequestHeaders": [{
                                "name": headerName,
                                "value": drmData,
                            }],
                        };
                        break;
                    }
                default:
                    {
                        // ism
                        drmObj[licenseName] = {
                            "url": licenseUrl,
                        };
                    }
            }

        } else {
            // Azure
            console.log("protocol", protocol);
            switch (protocol) {
                case "dash":
                    {
                        // QA
                        // let licenseCertificate = "https://optus-app-resources-second.vimondtv.com/widevine/cert_uat_widevine_com.bin";
                        let licenseCertificate = "https://vod-optus-third.vimondtv.com/cert_license_widevine_com.bin";
                        licenseName = parsedDRM;
                        if (parsedDRM === "playready") {
                            const licenses = _.get(item, ["license", "drm", "license"]);

                            const playreadyObj = _.find(licenses, val => _.get(val, "@name") === "playready");
                            const playreadyLicenseUrl = _.get(playreadyObj, "@uri");
                            if (playreadyLicenseUrl) {
                                licenseUrl = playreadyLicenseUrl;
                                // @TODO: unsure of licenseCertificate for playReady
                                // licenseCertificate = "https://vod-optus-third.vimondtv.com/cert_license_widevine_com.bin";

                            } else {
                                // fallback to widevine
                                licenseName = "widevine";
                            }
                        }
                        console.log("parsedDRM", parsedDRM);
                        console.log("licenseName", licenseName);
                        drmObj[licenseName] = {
                            "url": licenseUrl,
                            "serverCertificateUrl": licenseCertificate,
                        };
                        break;
                    }
                case "hls":
                    {
                        // QA
                        // let licenseCertificate = "https://vod-optus-second.vimondtv.com/optus.cer";
                        let licenseCertificate = "https://vod-optus-third.vimondtv.com/optus.cer";
                        drmObj[licenseName] = {
                            "certificateUrl": licenseCertificate,
                            "processSpcUrl": licenseUrl,
                            "licenseResponseType": "text",
                            "licenseRequestMessage": (message: any) => _arrayBufferToBase64(message),
                            "extractKey": (ckc: any) => ckc,
                        };
                        break;
                    }
                default:
                    {
                        // ism
                        drmObj[licenseName] = {
                            "url": licenseUrl,
                        };
                        break;
                    }
            }

        }
        // Check whether live asset has "start over" triggered by user
        // if (assetLive && _.get(this.state, "startOver")) {
        //     sourceUrl = `${sourceUrl}#t=0.1`;
        // }
        sources.push({
            "file": sourceUrl,
            "drm": drmObj,
        });

    });
    const autoStart = true;

    let p = {
        playlist: [{
            title: "Optus Sport 1",
            image: "https://image-service.ha.optus-third.vimondtv.com/api/v2/img/5c7c9e3ee4b0c39c0c37acb6",
            description: "Watch football 24/7 on Optus Sport 1.",
            mediaid: "42463",
            sources: sources,
            adschedule: undefined,
        },

        ],
        cast: {
            // customAppId: "CC1AD845"
        },
        // dash: "shaka"
        autostart: autoStart ? "viewable" : false,
        preload: "auto",
    };
    return p;
}

export default playerInstanceSetup;