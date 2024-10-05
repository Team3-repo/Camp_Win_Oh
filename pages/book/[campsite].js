import { useRouter } from 'next/router';

const BookPage = () => {
  const router = useRouter();
  const { campsite_id } = router.query; // 获取查询参数 campsite_id

  return (
    <div>
      <h1>預訂營地</h1>
      {campsite_id ? (
        <p>你正在查看 ID 為 {campsite_id} 的營地。</p>
      ) : (
        <p>正在加載...</p>
      )}
      {/* 在此添加更多的預訂邏輯或組件 */}
    </div>
  );
};

export default BookPage;
