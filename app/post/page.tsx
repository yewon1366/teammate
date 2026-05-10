import { supabase } from "../../lib/supabase";

// 가짜 데이터 대신 Supabase에서 실제 데이터를 불러와
async function getPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export default async function ListPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-indigo-600">TeamMate</a>
          <nav className="flex items-center gap-4">
            <a href="/list" className="text-indigo-600 font-semibold">팀원 찾기</a>
            <a href="/post" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">팀원 구하기</a>
          </nav>
        </div>
      </header>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">팀원 구인 목록</h1>
          <p className="text-gray-500">함께할 팀원을 찾고 있는 팀들이에요. 마음에 드는 팀에 지원해보세요!</p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              아직 등록된 구인글이 없어요. 첫 번째 구인글을 등록해보세요!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post: any) => (
                <div key={post.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <span className="inline-block bg-indigo-50 text-indigo-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {post.field}
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 mb-2">{post.project_name}</h2>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{post.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md">{post.roles}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-gray-400">📩 {post.contact}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}