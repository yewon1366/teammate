export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-indigo-600">TeamMate</div>
          <nav className="flex items-center gap-4">
            <a href="/list" className="text-gray-600 hover:text-indigo-600 transition-colors">팀원 찾기</a>
            <a href="/post" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">팀원 구하기</a>
          </nav>
        </div>
      </header>
      <section className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            아이디어는 있는데<br />
            <span className="text-indigo-600">함께할 팀원</span>이 없나요?
          </h1>
          <p className="text-xl text-gray-500 mb-10">
            TeamMate는 창업 아이디어를 가진 대학생들이<br />
            함께할 팀원을 찾을 수 있는 매칭 플랫폼이에요.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="/list" className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors">팀원 찾아보기</a>
            <a href="/post" className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-colors">팀원 구하기</a>
          </div>
        </div>
      </section>
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">TeamMate와 함께라면</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">딱 맞는 팀원 찾기</h3>
              <p className="text-gray-500">개발자, 디자이너, 기획자 등 필요한 역할의 팀원을 쉽게 찾을 수 있어요.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">빠른 팀 구성</h3>
              <p className="text-gray-500">구인글 등록부터 팀원 매칭까지, 빠르게 드림팀을 구성해보세요.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">대학생 전용 플랫폼</h3>
              <p className="text-gray-500">같은 대학생끼리 연결되는 신뢰할 수 있는 창업 팀원 매칭 서비스예요.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="px-6 py-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 TeamMate. 대학생 창업팀 매칭 플랫폼</p>
        </div>
      </footer>
    </div>
  );
}