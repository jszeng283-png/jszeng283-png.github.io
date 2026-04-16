/**
 * Gemini API 客户端模块
 * 用于与后端 Flask 服务通信
 */

class GeminiClient {
    constructor(baseURL = 'http://localhost:5000') {
        this.baseURL = baseURL;
    }

    /**
     * 生成文本
     * @param {string} prompt - 提示词
     * @returns {Promise<string>} 生成的文本
     */
    async generate(prompt) {
        try {
            const response = await fetch(`${this.baseURL}/api/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt })
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();
            return data.result;
        } catch (error) {
            console.error('Gemini 生成失败:', error);
            throw error;
        }
    }

    /**
     * 分析文本
     * @param {string} text - 要分析的文本
     * @returns {Promise<string>} 分析结果
     */
    async analyze(text) {
        try {
            const response = await fetch(`${this.baseURL}/api/analyze`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text })
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();
            return data.result;
        } catch (error) {
            console.error('文本分析失败:', error);
            throw error;
        }
    }
}

// 创建全局实例
const gemini = new GeminiClient();

// 使用示例
async function exampleUsage() {
    try {
        // 生成文本
        const generated = await gemini.generate('用中文解释什么是企业文化');
        console.log('生成的文本:', generated);

        // 分析文本
        const analyzed = await gemini.analyze('这是一个需要分析的文本样本');
        console.log('分析结果:', analyzed);
    } catch (error) {
        console.error('操作失败:', error);
    }
}
