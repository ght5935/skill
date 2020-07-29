

// 方法一 不兼容IE
// <a href={`${url}`} download>导出</a>

// 方法二
const onDownload = () => {

    let url = "后端写好的访问地址";
    //  获取时间戳
    let timestamp = new Date().getTime();
    // 获取XMLHttpRequest
    let xmlResquest = new XMLHttpRequest();
    //  发起请求
    xmlResquest.open("GET", url, true);
    // 设置请求头类型
    xmlResquest.setRequestHeader("Content-type", "application/json");
    //  设置请求token
    xmlResquest.responseType = "blob";
    //设置响应类型为blob类型,这一行一定要放在open后面，不然ie会报错！
    //  返回
    xmlResquest.onload = function (oEvent) {
        let content = xmlResquest.response;
        if ('msSaveOrOpenBlob' in navigator) { //兼容ie
            let filename = timestamp + ".xls";
            let blob = new Blob([content], { type: 'application/vnd.ms-excel' });
            window.navigator.msSaveOrOpenBlob(blob, filename);

        } else {
            // 组装a标签
            let elink = document.createElement("a");
            // 设置下载文件名
            elink.download = timestamp + ".xls";
            elink.style.display = "none";
            let blob = new Blob([content]);
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click();
            document.body.removeChild(elink);
        }

    };
    xmlResquest.upload.onprogress = function (e) {
        if (e.lengthComputable) { //lengthComputable 是 progress 的一个属性，表示资源是否可计算字节流
            let pross = (e.loaded / e.total) * 100;
            console.log(pross)
        }
    }
    xmlResquest.send();
}



