export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([
    chinaDownload.catch(() => {}),
    USDownload.catch(() => {}),
  ]);
}
