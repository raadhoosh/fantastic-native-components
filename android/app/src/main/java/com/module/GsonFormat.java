package com.module;

import java.util.List;

public class GsonFormat {
    /**
     * playlist : [{"title":"Optus Sport 1","image":"https://image-service.ha.optus-third.vimondtv.com/api/v2/img/5c7c9e3ee4b0c39c0c37acb6","description":"Watch football 24/7 on Optus Sport 1.","mediaid":"42463","sources":[{"file":"https://epllinearcdn.optusnet.com.au/__cl/default/__c/OS1/__op/axcenc/__f/manifest.mpd","drm":{"widevine":{"url":"https://drm-widevine-licensing.axprod.net/AcquireLicense","serverCertificateUrl":"https://drm-widevine-licensing.axprod.net/ServiceCertificate","licenseRequestHeaders":[{"name":"X-AxDRM-Message","value":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiM0NEMkY3QjEtQzNBOC00MjJBLTk0OTctQTdCNzAwN0Q3RkI1IiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImtleXMiOlt7ImlkIjoiZDY3YTE2Y2QtYTY5NS01ZGU0LTk5N2YtYWUyNDZjY2YwNWVhIn1dfSwiZXhwaXJhdGlvbl9kYXRlIjoiMjAyMC0wMi0yNFQxMDoxMDowNi4wMzRaIn0.ycc0B8MN-QsxHspmwoNujCbJ4H5pXDCm-ZlOQ9gmMBc"}]}}},{"file":"https://epllinearcdn.optusnet.com.au/726f32a8-f12d-ba5a-2622-10ef4f51f1b6/726f32a8-f12d-ba5a-2622-10ef4f51f1b6.ism/manifest(format=mpd-time-csf)","drm":{"widevine":{"url":"https://licenseproxy.ha.optus-third.vimondtv.com/license/wvmodular/42463?timeStamp=2019-02-24T10%3A10%3A10%2B0000&contract=c03bce3d109100e39e7e09cadf9505a9&account=source","serverCertificateUrl":"https://vod-optus-third.vimondtv.com/cert_license_widevine_com.bin"}}},{"file":"https://epllinearcdn.optusnet.com.au/726f32a8-f12d-ba5a-2622-10ef4f51f1b6/726f32a8-f12d-ba5a-2622-10ef4f51f1b6.ism/manifest(format=mpd-time-csf)","drm":{"widevine":{"url":"https://licenseproxy.ha.optus-third.vimondtv.com/license/wvmodular/42463?timeStamp=2019-02-24T10%3A10%3A10%2B0000&contract=c03bce3d109100e39e7e09cadf9505a9&account=source","serverCertificateUrl":"https://vod-optus-third.vimondtv.com/cert_license_widevine_com.bin"}}}]}]
     * cast : {}
     * autostart : viewable
     * preload : auto
     */

    private CastBean cast;
    private String autostart;
    private String preload;
    private List<PlaylistBean> playlist;

    public CastBean getCast() {
        return cast;
    }

    public void setCast(CastBean cast) {
        this.cast = cast;
    }

    public String getAutostart() {
        return autostart;
    }

    public void setAutostart(String autostart) {
        this.autostart = autostart;
    }

    public String getPreload() {
        return preload;
    }

    public void setPreload(String preload) {
        this.preload = preload;
    }

    public List<PlaylistBean> getPlaylist() {
        return playlist;
    }

    public void setPlaylist(List<PlaylistBean> playlist) {
        this.playlist = playlist;
    }

    public static class CastBean {
    }

    public static class PlaylistBean {
        /**
         * title : Optus Sport 1
         * image : https://image-service.ha.optus-third.vimondtv.com/api/v2/img/5c7c9e3ee4b0c39c0c37acb6
         * description : Watch football 24/7 on Optus Sport 1.
         * mediaid : 42463
         * sources : [{"file":"https://epllinearcdn.optusnet.com.au/__cl/default/__c/OS1/__op/axcenc/__f/manifest.mpd","drm":{"widevine":{"url":"https://drm-widevine-licensing.axprod.net/AcquireLicense","serverCertificateUrl":"https://drm-widevine-licensing.axprod.net/ServiceCertificate","licenseRequestHeaders":[{"name":"X-AxDRM-Message","value":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiM0NEMkY3QjEtQzNBOC00MjJBLTk0OTctQTdCNzAwN0Q3RkI1IiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImtleXMiOlt7ImlkIjoiZDY3YTE2Y2QtYTY5NS01ZGU0LTk5N2YtYWUyNDZjY2YwNWVhIn1dfSwiZXhwaXJhdGlvbl9kYXRlIjoiMjAyMC0wMi0yNFQxMDoxMDowNi4wMzRaIn0.ycc0B8MN-QsxHspmwoNujCbJ4H5pXDCm-ZlOQ9gmMBc"}]}}},{"file":"https://epllinearcdn.optusnet.com.au/726f32a8-f12d-ba5a-2622-10ef4f51f1b6/726f32a8-f12d-ba5a-2622-10ef4f51f1b6.ism/manifest(format=mpd-time-csf)","drm":{"widevine":{"url":"https://licenseproxy.ha.optus-third.vimondtv.com/license/wvmodular/42463?timeStamp=2019-02-24T10%3A10%3A10%2B0000&contract=c03bce3d109100e39e7e09cadf9505a9&account=source","serverCertificateUrl":"https://vod-optus-third.vimondtv.com/cert_license_widevine_com.bin"}}},{"file":"https://epllinearcdn.optusnet.com.au/726f32a8-f12d-ba5a-2622-10ef4f51f1b6/726f32a8-f12d-ba5a-2622-10ef4f51f1b6.ism/manifest(format=mpd-time-csf)","drm":{"widevine":{"url":"https://licenseproxy.ha.optus-third.vimondtv.com/license/wvmodular/42463?timeStamp=2019-02-24T10%3A10%3A10%2B0000&contract=c03bce3d109100e39e7e09cadf9505a9&account=source","serverCertificateUrl":"https://vod-optus-third.vimondtv.com/cert_license_widevine_com.bin"}}}]
         */

        private String title;
        private String image;
        private String description;
        private String mediaid;
        private List<SourcesBean> sources;

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getImage() {
            return image;
        }

        public void setImage(String image) {
            this.image = image;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public String getMediaid() {
            return mediaid;
        }

        public void setMediaid(String mediaid) {
            this.mediaid = mediaid;
        }

        public List<SourcesBean> getSources() {
            return sources;
        }

        public void setSources(List<SourcesBean> sources) {
            this.sources = sources;
        }

        public static class SourcesBean {
            /**
             * file : https://epllinearcdn.optusnet.com.au/__cl/default/__c/OS1/__op/axcenc/__f/manifest.mpd
             * drm : {"widevine":{"url":"https://drm-widevine-licensing.axprod.net/AcquireLicense","serverCertificateUrl":"https://drm-widevine-licensing.axprod.net/ServiceCertificate","licenseRequestHeaders":[{"name":"X-AxDRM-Message","value":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiM0NEMkY3QjEtQzNBOC00MjJBLTk0OTctQTdCNzAwN0Q3RkI1IiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImtleXMiOlt7ImlkIjoiZDY3YTE2Y2QtYTY5NS01ZGU0LTk5N2YtYWUyNDZjY2YwNWVhIn1dfSwiZXhwaXJhdGlvbl9kYXRlIjoiMjAyMC0wMi0yNFQxMDoxMDowNi4wMzRaIn0.ycc0B8MN-QsxHspmwoNujCbJ4H5pXDCm-ZlOQ9gmMBc"}]}}
             */

            private String file;
            private DrmBean drm;

            public String getFile() {
                return file;
            }

            public void setFile(String file) {
                this.file = file;
            }

            public DrmBean getDrm() {
                return drm;
            }

            public void setDrm(DrmBean drm) {
                this.drm = drm;
            }

            public static class DrmBean {
                /**
                 * widevine : {"url":"https://drm-widevine-licensing.axprod.net/AcquireLicense","serverCertificateUrl":"https://drm-widevine-licensing.axprod.net/ServiceCertificate","licenseRequestHeaders":[{"name":"X-AxDRM-Message","value":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiM0NEMkY3QjEtQzNBOC00MjJBLTk0OTctQTdCNzAwN0Q3RkI1IiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImtleXMiOlt7ImlkIjoiZDY3YTE2Y2QtYTY5NS01ZGU0LTk5N2YtYWUyNDZjY2YwNWVhIn1dfSwiZXhwaXJhdGlvbl9kYXRlIjoiMjAyMC0wMi0yNFQxMDoxMDowNi4wMzRaIn0.ycc0B8MN-QsxHspmwoNujCbJ4H5pXDCm-ZlOQ9gmMBc"}]}
                 */

                private WidevineBean widevine;

                public WidevineBean getWidevine() {
                    return widevine;
                }

                public void setWidevine(WidevineBean widevine) {
                    this.widevine = widevine;
                }

                public static class WidevineBean {
                    /**
                     * url : https://drm-widevine-licensing.axprod.net/AcquireLicense
                     * serverCertificateUrl : https://drm-widevine-licensing.axprod.net/ServiceCertificate
                     * licenseRequestHeaders : [{"name":"X-AxDRM-Message","value":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiM0NEMkY3QjEtQzNBOC00MjJBLTk0OTctQTdCNzAwN0Q3RkI1IiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImtleXMiOlt7ImlkIjoiZDY3YTE2Y2QtYTY5NS01ZGU0LTk5N2YtYWUyNDZjY2YwNWVhIn1dfSwiZXhwaXJhdGlvbl9kYXRlIjoiMjAyMC0wMi0yNFQxMDoxMDowNi4wMzRaIn0.ycc0B8MN-QsxHspmwoNujCbJ4H5pXDCm-ZlOQ9gmMBc"}]
                     */

                    private String url;
                    private String serverCertificateUrl;
                    private List<LicenseRequestHeadersBean> licenseRequestHeaders;

                    public String getUrl() {
                        return url;
                    }

                    public void setUrl(String url) {
                        this.url = url;
                    }

                    public String getServerCertificateUrl() {
                        return serverCertificateUrl;
                    }

                    public void setServerCertificateUrl(String serverCertificateUrl) {
                        this.serverCertificateUrl = serverCertificateUrl;
                    }

                    public List<LicenseRequestHeadersBean> getLicenseRequestHeaders() {
                        return licenseRequestHeaders;
                    }

                    public void setLicenseRequestHeaders(List<LicenseRequestHeadersBean> licenseRequestHeaders) {
                        this.licenseRequestHeaders = licenseRequestHeaders;
                    }

                    public static class LicenseRequestHeadersBean {
                        /**
                         * name : X-AxDRM-Message
                         * value : eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiM0NEMkY3QjEtQzNBOC00MjJBLTk0OTctQTdCNzAwN0Q3RkI1IiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImtleXMiOlt7ImlkIjoiZDY3YTE2Y2QtYTY5NS01ZGU0LTk5N2YtYWUyNDZjY2YwNWVhIn1dfSwiZXhwaXJhdGlvbl9kYXRlIjoiMjAyMC0wMi0yNFQxMDoxMDowNi4wMzRaIn0.ycc0B8MN-QsxHspmwoNujCbJ4H5pXDCm-ZlOQ9gmMBc
                         */

                        private String name;
                        private String value;

                        public String getName() {
                            return name;
                        }

                        public void setName(String name) {
                            this.name = name;
                        }

                        public String getValue() {
                            return value;
                        }

                        public void setValue(String value) {
                            this.value = value;
                        }
                    }
                }
            }
        }
    }
}
