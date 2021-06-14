import jsPDF from 'jspdf'

const generatePDF = () => {
	let pdfConfig = {};

	if (isMobile()) {
		pdfConfig = { orientation: "p", unit: "pt", format: [375, 1800] };
	} else {
		pdfConfig = { orientation: "p", unit: "pt", format: [1080, 1080] };
	}

	const pdfDoc = new jsPDF(pdfConfig.orientation, pdfConfig.unit, pdfConfig.format);
	pdfDoc.lineHeightProportion = 2;

	const html = createElementForExport(document);

	pdfDoc.html(html, {
		callback: function (pdf) {
			pdf.save("Nahuel_Caceres.pdf");

			window.location.reload();
		}
	})
}

const isMobile = () => {
	return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
}

const createElementForExport = (document) => {
	document.querySelector("#btExportPDF").remove();
	document.querySelector(".About-social").remove();

	const html = document.querySelector("#app > div > div");

	html.style.paddingLeft = "15px";

	return html;
}
export default generatePDF;