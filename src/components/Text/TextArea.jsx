import React from 'react'

function TextArea({ rows, cols, value, limit, className, placeholder }) {
    const [{ content, wordCount }, setContent] = React.useState({
        content: value,
        wordCount: 0
    });

    const setFormattedContent = React.useCallback(
        text => {
          let words = text.split(' ').filter(Boolean);
          if (words.length > limit) {
            setContent({
              content: words.slice(0, limit).join(' '),
              wordCount: limit
            });
          } else {
            setContent({ content: text, wordCount: words.length });
          }
        },
        [limit, setContent]
    );

    React.useEffect(() => {
        setFormattedContent(content);
      }, []);

      return (
        <>
          <textarea
            rows={rows}
            cols={cols}
            className={className}
            onChange={event => setFormattedContent(event.target.value)}
            value={content}
            placeholder={placeholder}
          />
          <p className="text-gray-500 mr-2 text-sm text-right">
            {wordCount}/{limit}
          </p>
        </>
      );
}

export default TextArea
