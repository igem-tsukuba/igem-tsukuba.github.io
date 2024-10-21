export const getColorAndLabel = (control: number) => {
    switch (control) {
        case 1:
            return { color: "#F59A23", label: "総合運営" }; // 黄色
        case 2:
            return { color: "#007AFF", label: "Tech" }; // 青色
        case 3:
            return { color: "#D20000", label: "教育活動" }; // 赤色
        default:
            return { color: "#A0A0A0", label: "その他" }; // 灰色
    }
};

export {}