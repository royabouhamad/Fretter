from django.urls import path
from . import views

urlpatterns = [
    path('notes', views.NotesView.as_view()),
    path('tunings', views.TuningsView.as_view()),
    path('scales', views.ScalesView.as_view()),
    path('chords', views.ChordsView.as_view()),
    path('scales-with-intervals', views.ScaleIntervalsView.as_view()),
    path('scales-with-intervals/<int:pk>', views.SingleScaleIntervalsView.as_view()),
    path('tuning-with-notes', views.TuningNotesView.as_view()),
    path('tuning-with-notes/<int:pk>', views.SingleTuningNotesView.as_view()),
    path('chords-with-intervals', views.ChordIntervalsView.as_view()),
    path('chords-with-intervals/<int:pk>', views.SingleChordIntervalsView.as_view()),
]